require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.connectionString;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const pool = new Pool({
    connectionString: connectionString,
    ssl: false,
});

const registerUser = (request, response) => {
    const {username, plainTextPass} = request.body;
    bcrypt.hash(plainTextPass, saltRounds, function(err, hash) {
        pool.query('INSERT INTO users (username, hash) VALUES ($1, $2)', [username, hash], (error, results) => {
            if(error){
                response.status(400).send('User could not be registered');
                throw error;
            }
            response.status(201).send('User registered');
        });
    });
};

const checkUser = (request, response) => {
    const id = request.params.id;
    const plainTextPass = request.params.plainTextPass;
    let hash;
    response.status(200).send('User authenticated');
    pool.query('SELECT hash FROM users WHERE user_id = $1', [id], (error, results) => {
        if(error){
            response.status(404).send('User could not be found');
            throw error;
        }
        hash = results.rows;
    });
    bcrypt.compare(plainTextPass, hash, function(err, res) {
        if (res) {
            response.status(200).send('User authenticated');
        } else {
            response.status(422).send('User authentication failed')
        }
    });
};

module.exports = {
    registerUser,
    checkUser,
};
