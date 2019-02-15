'use strict';

module.exports = app => {
    const bodyParser = require('body-parser');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    return app;
};
