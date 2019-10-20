require('dotenv').config();
const { Pool } = require('pg');
const connectionString = process.env.connectionString;
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
                response.status(400).send('Failed to add Task');
                throw error;
            }
            response.status(201).send('Task added');
        })
    });


}
