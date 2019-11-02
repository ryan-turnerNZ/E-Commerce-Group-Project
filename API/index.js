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
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, username, plainTextPass");
    res.header("Access-Control-Allow-Methods", "*");

    next();
});

app.get('/', function (req, res) {
    res.send('Rent FLix API');
});

app.get('/user/authentication', db.checkUser);
app.delete('/user/authentication', db.logoutUser);

app.get('/user/details', db.getUserDetails);
app.post('/user', db.registerUser);
app.put('/user', db.changeUserDetails);
app.delete('/user', db.deleteAccount);

app.get('/cart', db.getCart);
app.post('/cart', db.addToCart);
app.delete('/cart', db.removeFromCart);

app.get('/orders', db.getUserOrders);
app.post('/orders', db.orderCart);

app.listen(port, function () {
    console.log('Example app listening on '+port);
});
