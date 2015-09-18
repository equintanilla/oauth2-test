export const BIND_HOST = 'localhost';
export const BIND_PORT = 2000;
let AUTH_HOST = 'http://localhost:10050';
export const CALLBACK_HOST = `http://${BIND_HOST}:${BIND_PORT}`;

export const AUTH_URL = `${AUTH_HOST}/auth/oauth2/authorize`;
export const TOKEN_URL = `${AUTH_HOST}/auth/token`;

export const CLIENT_ID = 'foo-bar';
export const CLIENT_SECRET = 'Zwoitb4xEk';
