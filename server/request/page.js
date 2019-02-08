'use strict';

module.exports = (app, express) => {

    const fs       = require('fs');
    const path     = require('path');

    const rootDir  = __dirname + '/../../';
    const pathData = path.resolve(rootDir, 'data/');

    app.get('/page/:name', (request, response) => {
        const name = request.params.name || '';
        if(!name) {
            response.status(404).send('404');
            return;
        }

        const loadPage = path.resolve(pathData, name + '.json');
        if(!fs.existsSync(loadPage)) {
            response.status(404).send('404');
            return;
        }

        const pageData = require(loadPage);
        response.send(pageData);
    });
};