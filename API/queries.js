require('dotenv').config();
const { Pool } = require('pg');
const conString = process.env.DB_URL;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const fs = require('fs');

const pool = new Pool({
    connectionString: conString,
    ssl: true,
});

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
                error: 'Expired Token',
                force_relog: true,
            });
        }
    }
    else {
        response.status(401).json({
            valid: false,
            error: 'Invalid Token Provided'
        });
    }
};

const attemptUserToken = (user_id, token, response) => {
    pool.query('SELECT * FROM login_tokens WHERE user_id = $1', [user_id], (error, results) => {
        const {rowCount} = results;
        console.log(rowCount);
        if (rowCount>0) {
            console.log("Deleting")
            deleteToken(user_id, token, response).then(res => {
                const new_token = generateLoginToken(user_id);
                insertUserToken(user_id, new_token, response);
            })
        } else {
            console.log('Here');
            insertUserToken(user_id, token, response);
        }
    });
};

async function deleteToken(user_id, response) {
    await pool.query('DELETE FROM login_tokens WHERE user_id = $1', [user_id], (error, results) => {
        if (error) {
            response.status(404).json({
                valid: false,
                error: 'Token did not exist'
            })
        }
    })
}

const insertUserToken = (user_id, token, response) => {
    pool.query('INSERT INTO login_tokens (user_id, token) VALUES ($1, $2)', [user_id, token], (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json({
            token: token,
            valid: true
        });
    })
}

const registerUser = (request, response) => {
    const {username, plainTextPass} = request.body;
    bcrypt.hash(plainTextPass, saltRounds, function(err, hash) {
        pool.query('INSERT INTO users (username, hash) VALUES ($1, $2)', [username, hash], (error, results) => {
            if(error){
                response.status(400).json('User could not be registered');
            }
            response.status(201).json('User registered');
        });
    });
};

const checkUser = (request, response) => {
    const username = request.get('username');
    const plainTextPass = request.get('plainTextPass');
    pool.query('SELECT user_id, hash FROM users WHERE username = $1', [username], (error, results) => {
        if(error){
            response.status(404).json({
                valid: false,
                token: null,
            });
        }
        const {user_id, hash} = results.rows[0];
        bcrypt.compare(plainTextPass, hash, (err, res) => {
            if (res) {
                const token = generateLoginToken(user_id);
                attemptUserToken(user_id, token, response);
            } else {
                response.status(422).json({
                    valid: false,
                    token: null,
                })
            }
        });
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
                    error: 'Movie is already rented out by this user'
                })
            }
            response.status(200).json({
                valid: true,
                message: 'Movie successfully rented'
            })
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
                    error: error
                })
            }
            const {rowCount} = results;
            if (rowCount > 0) {
                response.status(200).json({
                    valid: true,
                    message: 'Movie successfully rented'
                })
            } else {
                response.status(403).json({
                    valid: true,
                    error: 'The user is not renting that movie'
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
                    error: error
                })
            }
            response.status(200).json({
                results: results.rows,
            })
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
                    error: error
                })
            }
            const {rows} = results;
            let values = '';
            for(i =0; i<rows.length-1; i++) {
                const {item_id} = rows[i];
                values += '(\''+user_id + '\' \'' + item_id+'\'),';
                console.log(rows[i])
            }
            const {item_id} = rows[rows.length-1];
            values += '(\''+user_id + '\' \'' + item_id+'\')';
            console.log(values);
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
                    client.query('DELETE FROM shopping_cart WHERE user_id = $1', [user_id], (err, res) => {
                        if (shouldAbort(err)) return;
                        client.query('INSERT INTO purchases (user_id, item_id) VALUES $1', [values], (err, res) => {
                        // client.query('INSERT INTO purchases SELECT user_id, item_id FROM shopping_cart WHERE user_id = $1', [user_id], (err, res) => {
                            if (shouldAbort(err)) return
                            client.query('COMMIT', err => {
                                if (err) {
                                    console.error('Error committing transaction', err.stack);
                                    response.status(500).json({
                                        valid: false,
                                        message: err
                                    });
                                }
                                done()
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
            }
            response.status(200).json({
                results: results.rows,
            })
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
                    error: error
                })
            }
            response.status(200).json({
                results: results.rows,
            })
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
                    error: error
                })
            }
            const {rowCount} = results;
            if (rowCount > 0) {
                response.status(403).json({
                    valid: false,
                    error: 'That username is currently unavailable',
                })
            }
            pool.query('UPDATE users SET username = $1 WHERE user_id = $2 AND username = $3', [new_username, user_id, username], (error, results) => {
                if (error) {
                    response.status(500).json({
                        valid: false,
                        error: error
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
                error: 'Valid token',
            })
        }
    });
};

const logoutUser = (request, response) => {
    const token = request.get('X-Requested-With');
    if (token.length<1) {
        response.status(401).json({
            valid: false,
            error: 'You are not logged in',
        })
    }
    checkToken(token, response).then(user_id => {
        console.log(user_id);
        console.log(token);
        pool.query('DELETE FROM login_tokens WHERE user_id = $1 AND token = $2', [user_id, token], (error, results) => {
            if (error) {
                response.status(500).json({
                    valid: false,
                    error: 'Server error'
                });
            }
            const {rowCount} = results;
            if (rowCount > 0){
                response.status(200).json({
                    valid: true,
                    message: 'Logout successful'
                })
            } else {
                response.status(404).json({
                    valid: false,
                    error: 'Invalid token'
                });
            }
        })
    });
};

module.exports = {
    registerUser,
    checkUser,
    deleteAccount,
    changeUserDetails,
    getUserDetails,
    getUserOrders,
    orderCart,
    removeFromCart,
    addToCart,
    getCart,
    logoutUser,
};
