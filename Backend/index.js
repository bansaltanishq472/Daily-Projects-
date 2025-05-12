const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('Twitter Page!');
});

app.get('/login', (req, res) => {
    res.send('<h1>You Login Into This Account.</h1>');
});