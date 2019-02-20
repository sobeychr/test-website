'use strict';

module.exports = grunt => {
    const reactFiles = ['chat'];

    const fileRoot = {
        expand: true,
        cwd: './asset/js-src/',
        dest: './asset/js/',
        ext:  '.js'
    };
    var files = [{
            expand: true,
            cwd: './asset/js-src/',
            src: [
                '**/*.js',
                '!react/**',
                '!**/*.min.js',
                '!**/*.react.js',
            ],
            dest: './asset/js/',
            ext:  '.js'
        }];

    files = [
        {
            src: [
                './asset/js-src/chat.react.js',
                './asset/js-src/react/chat/**/*.js'
            ],
            dest: './asset/js/chat.js'
        }
    ];

    return {
        options: {
            plugins: ['transform-es2015-modules-amd'],
            presets: ['@babel/preset-env', '@babel/preset-react'],
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
