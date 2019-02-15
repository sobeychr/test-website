'use strict';

module.exports = (app, express) => {
    const path    = require('path');
    const rootDir = __dirname + '/../../';
    const alias   = {
            "/"       : "www/",
            "/asset/" : "asset/",
            "/image/" : "asset/image/"
        };
    const options = {
        extensions: ['html', 'php']
    };

    for(let publicUrl in alias)
    {
        let localPath = path.resolve(rootDir, alias[publicUrl]);
        app.use(publicUrl, express.static(localPath, options));
    }
};
