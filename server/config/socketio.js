'use strict';

module.exports = http => {
    const io      = require('socket.io')(http);

    io.on('connection', socket => {
        console.log('user connected');
    });

    return io;
};
