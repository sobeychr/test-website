'use strict';

module.exports = grunt => {
    const files = [{
            expand: true,
            cwd: './asset/js-src/',
            src:  [
                '**/*.js',
                '!**/*.min.js'
            ],
            dest: './asset/js/',
            ext:  '.js'
        }];

    return {
        options: {
            presets: ['@babel/preset-env']
        },
        dev: {
            files,
            options: {
                sourceMap: true
            }
        }
    };
};
