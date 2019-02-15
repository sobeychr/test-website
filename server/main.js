'use strict';

require('colors');
require('dotenv').config();

const express = require('express');
const app     = express();
const http    = require('http').Server(app);

require('./middleware/json')(app);

require('./config/requests')(app);
require('./config/socketio')(http);
require('./config/static')(app, express);

require('./config/server')(http);
