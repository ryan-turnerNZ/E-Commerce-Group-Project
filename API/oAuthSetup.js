const { google } = require('googleapis');
require('dotenv').config();

const googleConfig = {
    clientId: '101333282092-76gts5lkcvtk15dtg6g7c1lt54vkvrbf.apps.googleusercontent.com',
    clientSecret: process.env.CLIENT_SECRET,
    redirect: 'https://rent-flix.herokuapp.com/google-auth',
};

const defaultScope = [
    'https://www.googleapis.com/auth/userinfo.email',
];

function createConnection() {
    return new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}

function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: defaultScope
    });
}

function urlGoogle() {
    const auth = createConnection(); // this is from previous step
    const url = getConnectionUrl(auth);
    return url;
}
