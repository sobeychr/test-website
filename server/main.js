'use strict';

require('colors');
require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io')(http);

require('./config/route')(app, express);

var messages = [
    {name: 'Wick', body: 'alpha'},
    {name: 'John', body: 'beta'},
    {name: 'Marcel', body: 'gamma'},
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/message', (request, response) => {
    response.json(messages);
});

app.post('/message', (request, response) => {

    var { name, body } = request.body,
        newMessage = {
            name,
            body
        };

    messages.push(newMessage);
    console.log('newMessage', newMessage);
    io.emit('newMessage', newMessage);

    response.status(200).json(newMessage);
});

io.on('connection', socket => {
    console.log('user connected');
});

const server = http.listen(process.env.PORT, () => {
    
    let browserPath = process.env.URL + ':' + server.address().port;

    console.log('>> Listening to:'.yellow, browserPath.bgBlack.white);
    console.log('>> Press'.yellow, "ctrl+c".bgBlack.white, 'to stop process'.yellow);
    console.log('>> Type'.yellow,  "rs".bgBlack.white,     'to restart'.yellow);
});
