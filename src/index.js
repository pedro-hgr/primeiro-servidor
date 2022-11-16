const express = require('express');
const app = express();
const { usuarios } = require('./array');

app.get('/', (req, answer) => {
    answer.send('testando server')
});
app.get('/home', (req, answer) => {
    answer.send('nova rota')
});

app.get('/usuarios', (req, answer) => {
    answer.send(usuarios)
});
app.listen(3000);