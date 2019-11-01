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
                error: 'Expired Token'
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

const insertUserToken = (user_id, token, response) => {
    pool.query('SELECT * FROM login_tokens WHERE user_id = $1', [user_id], (error, results) => {
        if (results.rowCount>0) {
            console.log("Token already present for user");
            response.status(404).json({
                token: null,
                valid: false,
            });
        } else {
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
    });
};

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
                insertUserToken(user_id, token, response);
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
    checkToken(token).then(num => {
        if (num>0) {
            response.status(200).json({
                valid: true,
                error: 'Valid token',
            })
        }
    });
};

const removeFromCart = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token).then(num => {
        if (num>0) {
            response.status(200).json({
                valid: true,
                error: 'Valid token',
            })
        }
    });
};

const updateCartItemAmount = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token).then(num => {
        if (num>0) {
            response.status(200).json({
                valid: true,
                error: 'Valid token',
            })
        }
    });
};

const orderCart = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token).then(num => {
        if (num>0) {
            response.status(200).json({
                valid: true,
                error: 'Valid token',
            })
        }
    });
};

const getUserOrders = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token).then(num => {
        if (num>0) {
            response.status(200).json({
                valid: true,
                error: 'Valid token',
            })
        }
    });
};

const getUserDetails = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token).then(num => {
        if (num>0) {
            response.status(200).json({
                valid: true,
                error: 'Valid token',
            })
        }
    });
};

const changeUserDetails = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token).then(num => {
        if (num>0) {
            response.status(200).json({
                valid: true,
                error: 'Valid token',
            })
        }
    });
};

const deleteAccount = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token).then(num => {
        if (num>0) {
            response.status(200).json({
                valid: true,
                error: 'Valid token',
            })
        }
    });
};

const getCart = (request, response) => {
    const token = request.get('X-Requested-With');
    checkToken(token).then(num => {
        if (num>0) {
            response.status(200).json({
                valid: true,
                error: 'Valid token',
            })
        }
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
    updateCartItemAmount,
    removeFromCart,
    addToCart,
    getCart,
};
