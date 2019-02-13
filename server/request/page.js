'use strict';

module.exports = (app, express) => {

    const fs       = require('fs');
    const path     = require('path');

    const rootDir  = __dirname + '/../../';
    const pathData = path.resolve(rootDir, 'data/');
    const pathHtml = path.resolve(rootDir, 'www/');

    /*
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
        response.json(pageData);
    });
    */
    /*
    app.get('/:pageName$', (request, response) => {
        const pageName = request.params.pageName || '';

        const pageHtml = path.resolve(pathHtml + pageName + '.html');
        const pageJson = path.resolve(pathData + pageName + '.json');

        if(pageName) {

            fs.exists(pageHtml, () => {
                response.status(200).send('ttt');
            });
        }
    });
    */
};