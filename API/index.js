const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser')
const db = require('./queries')

const corsOptions = {
    origin: 'https://nwen-project2-site.herokuapp.com/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.send('Rent FLix API');
});
