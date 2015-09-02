import express from 'express';
import passport from 'passport';
import OAuth2Strategy from 'passport-oauth2';
import {
    BIND_HOST,
    BIND_PORT,
    CALLBACK_HOST,
    CLIENT_ID,
    CLIENT_SECRET,
    TOKEN_URL,
    AUTH_URL
} from './config';

let app = express();

passport.use(
    new OAuth2Strategy({
        authorizationURL: AUTH_URL,
        tokenURL: TOKEN_URL,
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: `${CALLBACK_HOST}/auth/callback`
    },
    function (accessToken, refreshToken, {}, done) {
        console.log('Token responses:', accessToken, refreshToken);
        done();
    }
));

app.get('/', (req, res) => {
    res.send({ hereThereBe: 'nothing', goto: '/auth' });
});

app.get('/auth', passport.authenticate('oauth2'));

app.get('/auth/callback',
    passport.authenticate('oauth2', { failureRedirect: '/login' }),
    (req, res) => {
        console.log('!!! BAM');
        res.redirect('/success');
    }
);

app.get('/success', (req, res) => {
    res.send({ hereThereBe: 'success' });
});

console.log(`Server started at http://${BIND_HOST}:${BIND_PORT}`);
app.listen(BIND_PORT);
