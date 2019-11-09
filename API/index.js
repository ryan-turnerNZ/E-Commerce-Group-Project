/***
 * Author: Ryan Turner
 *
 * Ryan Turner worked on this file himself
 */

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const db = require('./queries');

var CacheControl = require("express-cache-control");
var cache = new CacheControl().middleware;

const corsOptions = {
    origin: '',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, username, plainTextPass, email");
    res.header("Access-Control-Allow-Methods", "*");

    next();
});



app.get('/', cache("seconds", 27), function (req, res) {
    res.send('Rent FLix API');
});

app.get('/user/authentication', db.checkUser);
app.get('/user/authentication/google', db.checkGoogleUser);
app.delete('/user/authentication', db.logoutUser);

app.get('/user/details', cache("hours", 24), db.getUserDetails);
app.post('/user', db.registerUser);
app.put('/user', db.changeUserDetails);
app.delete('/user', db.deleteAccount);

app.get('/cart', cache("hours", 24), db.getCart);
app.post('/cart', db.addToCart);
app.delete('/cart/:item_id', db.removeFromCart);

app.get('/orders', cache("hours", 24), db.getUserOrders);
app.post('/orders', db.orderCart);

app.get('/user/password', db.requestResetPassword);
app.get('/user/password/:token', db.resetPassword);

app.listen(port, function () {
    console.log('Example app listening on '+port);
});
