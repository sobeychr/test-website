'use strict';

module.exports = app => {
    const path    = require('path');
    const rootDir = __dirname + '/../../';

    const pathMessage = path.resolve(rootDir, 'data/message.json');
    var messages = require(pathMessage);

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
};
