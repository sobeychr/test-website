'use strict';

module.exports = (app, express) => {

    const path = require('path');
    const rootDir = __dirname + '/../../';
    const alias = require('./alias.json');

    for(let publicUrl in alias)
    {
        let localPath = path.resolve(rootDir, alias[publicUrl]);
        app.use(publicUrl, express.static(localPath));
    }
};