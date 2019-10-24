require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.DB_URL;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const pool = new Pool({
    connectionString: connectionString,
    ssl: true,
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
    const username = request.params.username;
    const plainTextPass = request.params.plainTextPass;
    pool.query('SELECT id, hash FROM users WHERE username = $1', [username], (error, results) => {
        if(error){
            response.status(404).send('User could not be found');
            throw error;
        }
        console.log(results.rows[0]);
        const {hash} = results.rows[0];
        bcrypt.compare(plainTextPass, hash, function(err, res) {
            if (res) {
                response.status(200).send('User authenticated');
            } else {
                response.status(422).send('User authentication failed')
            }
        });
    });
};

module.exports = {
    registerUser,
    checkUser,
};
