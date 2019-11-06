require('dotenv').config();

const express = require('express');
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const app = express();

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// Configure the Facebook strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new Strategy({
        clientID: '420166398910384',
        clientSecret: '38b91905496ffc80f8769893700ac0b9',
        callbackURL: '/return'
    },
    function(accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});


// Create a new Express application.



// Define routes.
app.get('/',
    function(req, res) {
        res.render('home', { user: req.user });
    });

app.get('/login',
    function(req, res){
        res.render('login');
    });

app.get('/login/facebook',
    passport.authenticate('facebook'));

app.get('/return',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });

app.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
        res.render('profile', { user: req.user });
    });

app.listen(process.env['PORT'] || 8080);
