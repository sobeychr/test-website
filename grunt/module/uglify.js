'use strict';

module.exports = grunt => {
    const files = [{
        expand: true,
        cwd: './asset/js/',
        src:  [
            '**/*.js',
            '!**/*.min.js',
            '!**/*.js.map'
        ],
        dest: './asset/js/',
        ext:  '.js'
    }];

    return {
        options: {
            ascii_only: true,
            ie8: false
        },
        stage: {
            files,
            options: {
                comments: 'all',
                sourceMap: true
            }
        },
        live: {
            files,
            options: {
                comments: false,
                sourceMap: false
            }
        }
    };
};
