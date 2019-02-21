'use strict';

module.exports = grunt => {
    const files = [{
            expand: true,
            cwd: './asset/js-src/',
            src: [
                '**/*.js',
                '!**/*-backup.js',
                '!**/*.min.js',
            ],
            dest: './asset/js/',
            ext:  '.js'
        }];

    return {
        options: {
            'presets': ['@babel/preset-env'],
            sourceMap: false
        },
        dev: {
            files,
            options: {
                sourceMap: true
            }
        },
        stage: {
            files
        },
        live: {
            files
        }
    };
};
