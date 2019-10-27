const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const db = require('./queries');


const corsOptions = {
    origin: '',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Rent FLix API');
});

app.get('/authenticateUser/:username/:plainTextPass', db.checkUser);
app.post('/user', db.registerUser);

app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});
