/***
 * Author: Ryan Turner
 *
 * Ryan Turner worked on this file himself
 */

require('dotenv').config();
const { Pool } = require('pg');

const verifier = require('google-id-token-verifier')
const {OAuth2Client} = require('google-auth-library');
const conString = process.env.DB_URL;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const fs = require('fs');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const pool = new Pool({
    connectionString: conString,
    ssl: true,
});

const options = {
    auth: {
        api_user: 'apikey',
        api_key: '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'
    }
};

const privateKey = fs.readFileSync('./private.pem', 'utf8');

const generateLoginToken = (userId) => {
    return jwt.sign({aud: userId}, privateKey, {algorithm: 'HS256'});
};

async function checkToken(token, response){
    const decoded = jwt.verify(token, privateKey, {algorithm: 'HS256'});
    if (decoded) {
        const {rowCount} = await pool.query('SELECT user_id FROM login_tokens WHERE user_id = $1', [decoded.aud]);
        if (rowCount>0) {
            return decoded.aud;
        } else {
            response.status(401).json({
                valid: false,
                message: 'Expired Token',
            });
        }
    }
    else {
        response.status(401).json({
            valid: false,
            message: 'Invalid Token Provided'
        });
    }
}

function checkGoogleToken(token, response) {
    verifier.verify(token, process.env.CLIENT_ID, (err, tokenInfo) => {
        if (err) {
            response.status(401).json({
                valid: false,
                message: err,
            });
            console.log(err);
            return;
        }
        googleLogin(tokenInfo, response);
    })
}

const attemptUserToken = (user_id, token, response) => {
    pool.query('SELECT * FROM login_tokens WHERE user_id = $1', [user_id], (error, results) => {
        const {rowCount} = results;
        if (rowCount>0) {
            deleteToken(user_id, token, response).then(res => {
                const new_token = generateLoginToken(user_id);
                insertUserToken(user_id, new_token, response);
            })
        } else {
            insertUserToken(user_id, token, response);
        }
    });
};

async function deleteToken(user_id, response) {
    await pool.query('DELETE FROM login_tokens WHERE user_id = $1', [user_id], (error, results) => {
        if (error) {
            response.status(404).json({
                valid: false,
                message: error
            })
        }
    })
}

const insertUserToken = (user_id, token, response) => {
    pool.query('INSERT INTO login_tokens (user_id, token) VALUES ($1, $2)', [user_id, token], (error, results) => {
        if (error) {
            response.status(404).json({
                valid: false,
                message: error
            })
        } else {
            response.status(200).json({
                message: token,
                valid: true
            });
        }

    })
}

const registerUser = (request, response) => {
    const {bool, email, username, password, token} = request.body;
    if (bool === true) {
        googleRegister(email, username, response, token);
    } else {
        normalRegister(email, username, password, response);
    }
};

const normalRegister = (email, username, password, response) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
        pool.query('INSERT INTO users (username, hash, email, google_reg) VALUES ($1, $2, $3, false)', [username, hash, email], (error, results) => {
            if(error){
                response.status(400).json({
                    valid: false,
                    message: error
                });
                console.log(error)
            } else {
                response.status(201).json({
                    valid: true,
                    message: 'User Registered'
                })
            }
        });
    });
};

const googleLogin = (data, response) => {
    console.log(data);
    const {email, name} = data;
    pool.query('SELECT user_id FROM users WHERE email = $1 AND google_reg=true', [email], (error, results) => {
        if(error){
            response.status(500).json({
                valid: false,
                message: error,
            });
        } else{
            const {rowCount} = results;
            if (rowCount > 0) {
                const {user_id} = results.rows[0];
                const login_token = generateLoginToken(user_id);
                attemptUserToken(user_id, login_token, response);
            } else {
                response.status(500).json({
                    valid: false,
                    message:"Server Error",
                });
            }
        }

    });
}

const googleRegister = (reg_email, username, response, token) => {
    pool.query('SELECT * FROM users WHERE email = $1 AND google_reg = true', [reg_email], (error, results) => {
        if (error) {
            response.status(400).json({
                valid: false,
                message: error
            });
            return;
        }
        const {rowCount} = results;
        if(rowCount > 0) {
            checkGoogleToken(token, response);
        } else {
            pool.query('INSERT INTO users (email, username, google_reg) VALUES ($1, $2, true)', [email, username], (error, results) => {
                if(error){
                    response.status(400).json({
                        valid: false,
                        message: error
                    });
                } else {
                    const {rowCount} = results;
                    if (rowCount > 0) {
                        pool.query('SELECT user_id FROM users WHERE email = $1 AND google_reg = true', [email], (error, results) => {
                            if (error) {
                                response.status(400).json({
                                    valid: false,
                                    message: error
                                });
                            } else {
                                const {user_id} = results.rows[0];
                                const login_token = generateLoginToken(user_id);
                                attemptUserToken(user_id, token, response);
                            }

                        })
                    }
                }

            });
        }

    })

};

const checkGoogleUser = (request, response) => {
    const {token, email, username, bool} = request.body;
    checkGoogleToken(token, response)
};

const checkUser = (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    const username = request.get('username');
    const plainTextPass = request.get('plainTextPass');
    pool.query('SELECT user_id, hash FROM users WHERE username = $1 AND google_reg=false', [username], (error, results) => {
        if(error){
            response.status(404).json({
                valid: false,
                message: "Wrong username/password",
            });
        } else{
            const {user_id, hash} = results.rows[0];
            bcrypt.compare(plainTextPass, hash, (err, res) => {
                if (res) {
                    const token = generateLoginToken(user_id);
                    attemptUserToken(user_id, token, response);
                } else {
                    response.status(422).json({
                        valid: false,
                        message: "Wrong username/password",
                    })
                }
            });
        }

    });
};

const addToCart = (request, response) => {
    const token = request.get('X-Requested-With');
    const {item_id} = request.body;
    checkToken(token, response).then(user_id => {
        pool.query('INSERT INTO shopping_cart (user_id, item_id) VALUES ($1, $2)', [user_id, item_id], (error, results) => {
            if (error) {
                response.status(403).json({
                    valid: false,
                    message: 'Movie is already rented out by this user'
                })
            } else {
                response.status(200).json({
                    valid: true,
                    message: 'Movie successfully rented'
                })
            }

        })
    });
};

const removeFromCart = (request, response) => {
    const token = request.get('X-Requested-With');
    const item_id = request.params.item_id;
    checkToken(token, response).then(user_id => {
        pool.query('DELETE FROM shopping_cart WHERE user_id = $1 AND item_id = $2', [user_id, item_id], (error, results) => {
            if (error) {
                response.status(500).json({
                    valid: false,
                    message: error
                })
            }
            const {rowCount} = results;
            if (rowCount > 0) {
                response.status(200).json({
                    valid: true,
                    message: 'Movie successfully removed from cart'
                })
            } else {
                response.status(403).json({
                    valid: true,
                    message: 'The user is not renting that movie'
                })
            }
        })
    });
};

const getCart = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token, response).then(user_id => {
        pool.query('SELECT item_id FROM shopping_cart WHERE user_id = $1', [user_id], (error, results) => {
            if (error) {
                response.status(500).json({
                    valid: false,
                    message: error
                })
            } else {
                response.status(200).json({
                    valid: true,
                    message: results.rows,
                })
            }


        })
    });
};

const orderCart = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token, response).then(user_id => {
        pool.query('SELECT item_id FROM shopping_cart WHERE user_id = $1', [user_id], (error, results) => {
            if (error) {
                response.status(500).json({
                    valid: false,
                    message: error
                })
            }
            const {rowCount} = results;
            if (rowCount<1) {
                response.status(404).json({
                    valid: false,
                    message: 'There are no movie to purchase'
                })
            }
            const {rows} = results;
            let values = '';
            for(i =0; i<rows.length-1; i++) {
                const {item_id} = rows[i];
                values += '('+user_id + ', ' + item_id+'),';
            }
            const {item_id} = rows[rows.length-1];
            values += '('+user_id + ', ' + item_id+')';
            pool.connect((err, client, done) => {
                const shouldAbort = err => {
                    if (err) {
                        console.error('Error in transaction', err.stack);
                        client.query('ROLLBACK', err => {
                            if (err) {
                                console.error('Error rolling back client', err.stack)
                            }
                            response.status(500).json({
                                valid: false,
                                message: err
                            });
                            done()
                        })
                    }
                    return !!err
                };
                client.query('BEGIN', err => {
                    if (shouldAbort(err)) return;
                    client.query('INSERT INTO purchases (user_id, item_id) SELECT user_id, item_id FROM shopping_cart WHERE user_id = $1', [user_id], (err, res) => {
                        if (shouldAbort(err)) return;
                        client.query('DELETE FROM shopping_cart WHERE user_id = $1', [user_id], (err, res) => {
                            if (shouldAbort(err)) return;
                            client.query('COMMIT', err => {
                                if (err) {
                                    console.error('Error committing transaction', err.stack);
                                    response.status(500).json({
                                        valid: false,
                                        message: err
                                    });
                                }
                                done();
                                response.status(200).json({
                                    valid: true,
                                    message: 'Items ordered'
                                })
                            })
                        })
                    })
                })
            })
        })
    });
};

const getUserOrders = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token, response).then(user_id => {
        pool.query('SELECT purchase_id, item_id, purchase_date FROM purchases WHERE user_id = $1', [user_id], (error, results) => {
            if (error) {
                response.status(500).json({
                    valid: false,
                    error: error
                })
            } else{
                response.status(200).json({
                    valid: true,
                    message: results.rows,
                })
            }
        })
    });
};

const getUserDetails = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token, response).then(user_id => {
        pool.query('SELECT * from users WHERE user_id = $1', [user_id], (error, results) => {
            if (error) {
                response.status(500).json({
                    valid: false,
                    message: error
                })
            } else {
                response.status(200).json({
                    valid: true,
                    message: results.rows,
                })
            }
        })
    });
};

const changeUserDetails = (request, response) => {
    const token = request.get('X-Requested-With');
    const {username, new_username} = request.body;
    checkToken(token, response).then(user_id => {
        pool.query('SELECT * FROM users WHERE username = $2', [new_username], (error, results) => {
            if (error) {
                response.status(500).json({
                    valid: false,
                    message: error
                })
            }
            const {rowCount} = results;
            if (rowCount > 0) {
                response.status(403).json({
                    valid: false,
                    message: 'That username is currently unavailable',
                })
            }
            pool.query('UPDATE users SET username = $1 WHERE user_id = $2 AND username = $3', [new_username, user_id, username], (error, results) => {
                if (error) {
                    response.status(500).json({
                        valid: false,
                        message: error
                    })
                }
            })
        });
    });
};

const deleteAccount = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token, response).then(num => {
        if (num>0) {
            response.status(200).json({
                valid: true,
                message: 'Valid token',
            })
        }
    });
};

const logoutUser = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token, response).then(user_id => {
        pool.query('DELETE FROM login_tokens WHERE user_id = $1 AND token = $2', [user_id, token], (error, results) => {
            if (error) {
                response.status(500).json({
                    valid: false,
                    message: error
                });
            } else {
                const {rowCount} = results;
                if (rowCount > 0){
                    response.status(200).json({
                        valid: true,
                        message: 'Logout successful'
                    })
                } else {
                    response.status(404).json({
                        valid: false,
                        message: 'Invalid token'
                    });
                }
            }

        })
    });
};

const requestResetPassword = (request, response) => {
    const token = request.get('X-Requested-With');
    const username = request.get('username');
    checkToken(token, response).then((user_id) => {
        pool.query("SELECT user_id FROM email_tokens WHERE user_id = $1", [user_id], (err, results) => {
            if (err) {
                response.status(500).json({
                    valid: false,
                    message: err,
                })
            }
            const {rowCount} = results;
            if (rowCount > 0) {
                pool.query("DELETE FROM email_tokens WHERE user_id = $1", [user_id], (err, results) => {
                    if (err) {
                        response.status(500).json({
                            valid: false,
                            message: err,
                        })
                    }
                })
            }
        });
        pool.query("SELECT email FROM users WHERE user_id = $1 AND username = $2", [user_id, username], (err, results) => {
            if (err) {
                response.status(500).json({
                    valid: false,
                    message: err,
                })
            }
            const {rowCount} = results;
            if (rowCount <1) {
                response.status(403).json({
                    valid: false,
                    message: 'No user exists for those details'
                })
            }
            const email = results.rows[0];
            const secToken = generateOneTimeToken(user_id);

            const msg = {
                from: 'rentflixhelp@gmail.com',
                to: email,
                subject: 'Password Reset',
                html: '<p>Click <a href="https://rent-flix.herokuapp.com/reset/' + secToken + '">here</a> to reset your password</p>'
            };
            pool.query("INSERT INTO email_tokens (user_id, token) VALUES ($1, $2)", [user_id, secToken], (err, results) => {
                if (err) {
                    console.log(err)
                    response.status(500).json({
                        valid: false,
                        message: err,
                    })
                } else {
                    sgMail.send(msg);
                    response.status(200).json({
                        valid: true,
                        message: 'Reset Email Sent',
                    })
                }
            });

        })

    })
};

const generateOneTimeToken = (userId) => {
    return jwt.sign({aud: userId, exp: Math.floor(Date.now() /1000 ) + 600}, privateKey, {algorithm: 'HS256'});
};

const resetPassword = (request, response) => {
    const token = request.params.token;
    const decoded = jwt.verify(token, privateKey, {algorithm: 'HS256'})
    if (!decoded) {
        response.status(403).json({
            valid: false,
            message: "Invalid/Expired Token",
        })
    }
    const user_id = decoded.aud;
    pool.query("SELECT * FROM email_tokens WHERE user_id = $1 AND token = $2", [user_id, token], (err, results) => {
        if (err) {
            response.status(500).json({
                valid: false,
                message: err,
            })
        }
        const {rowCount} = results;
        if (rowCount > 0) {
            deleteEmailToken(user_id, response)
        } else {
            response.status(403).json({
                valid: false,
                message: "Token is no longer valid"
            })
        }
    })
};

deleteEmailToken = (user_id, response) => {
    pool.query("DELETE FROM email_tokens WHERE user_id = $1", [user_id], (err, results) => {
        console.log("UserId: " +user_id)
        if (err) {
            response.status(500).json({
                valid: false,
                message: err,
            })
        } else {
            response.status(200).json({
                valid: true,
                message: "Valid Token",
            })
        }
    })
};

module.exports = {
    registerUser,
    checkUser,
    checkGoogleUser,
    deleteAccount,
    changeUserDetails,
    getUserDetails,
    getUserOrders,
    orderCart,
    removeFromCart,
    addToCart,
    getCart,
    logoutUser,
    requestResetPassword,
    resetPassword,
};
