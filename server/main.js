'use strict';

require('colors');
require('dotenv').config();

const express = require('express');
const https = require('https');
const http = require('http');
const app = express();

require('./config/route')(app, express);
require('./request/page')(app, express);

var server = app.listen(process.env.PORT, () => {
    
    let browserPath = process.env.URL + ':' + server.address().port;

    console.log('>> Listening to:'.yellow, browserPath.bgBlack.white);
    console.log('>> Press'.yellow, "ctrl+c".bgBlack.white, 'to stop process'.yellow);
    console.log('>> Type'.yellow,  "rs".bgBlack.white, 'to restart'.yellow);
});
