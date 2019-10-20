require('dotenv').config()
const { Pool } = require('pg')
const connectionString = process.env.connectionString;

const pool = new Pool({
    connectionString: connectionString,
    ssl: true,
})

