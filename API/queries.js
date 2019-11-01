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

const insertUserToken = (user_id, token) => {
    //pool.query('INSERT INTO user')
};

const checkUser = (request, response) => {
    console.log(request);
    const username = request.get('username');
    const plainTextPass = request.get('plainTextPass');
    console.log(username);
    console.log(plainTextPass);
    pool.query('SELECT user_id, hash FROM users WHERE username = $1', [username], (error, results) => {
        if(error){
            response.status(404).json({
                valid: false,
                token: null,
            });
        }
        const {user_id, hash} = results.rows[0];
        bcrypt.compare(plainTextPass, hash, function(err, res) {
            if (res) {
                const token = generateLoginToken(user_id);
                insertUserToken(token);
                response.status(200).json({
                    token: token,
                    valid: true
                });
            } else {
                response.status(422).json({
                    valid: false,
                    token: null,
                })
            }
        });
    });
};

const addToCart = (request, reponse) => {

};

const removeFromCart = (request, reponse) => {

};

const updateCartItemAmount = (request, reponse) => {

};

const orderCart = (request, reponse) => {

};

const getUserOrders =(request, reposne) => {

};

const getUserDetails = (request, reponse) => {

};

const changeUserDetails = (request, reponse) => {

};

const deleteAccount = (request, reponse) => {

};

const getCart = (request, reponse) => {

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
