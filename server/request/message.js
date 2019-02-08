'use strict';

module.exports = (app, express) => {

    app.get('/message', (request, response) => {
        response.send('test message');
    });
};