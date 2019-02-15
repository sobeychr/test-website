'use strict';

module.exports = (app) => {
    const fs   = require('fs');
    const path = require('path');
    const rootDir = __dirname + '/../../';

    const dirRequest = path.resolve(rootDir, './server/request/');
    fs.readdir(dirRequest, (err, files) => {
        files.forEach(entry => {

            let pathRequest = path.resolve(dirRequest, entry);
            require(pathRequest)(app);
        });
    });
};
