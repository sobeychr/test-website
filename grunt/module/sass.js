'use strict';

module.exports = grunt => {
    return {
        options: {
            cacheLocation: './grunt/.sass-cache',
            unixNewlines: true
        },
        dev: {
            sourcemap: 'auto',
            style: 'expanded',
            trace: true,
            files: [{
                expand: true,
                cwd: './asset/scss/',
                src:  ['**/*.scss'],
                dest: './asset/css/',
                ext:  '.css'
            }]
        }
    };
};
