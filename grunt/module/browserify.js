'use strict';

module.exports = grunt => {
    const isDev   = grunt.config.get('isDev');

    return {
        options: {
            browserifyOptions: {
                debug: isDev
            },
            transform: [
                ['babelify', {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }]
            ]
        },
        react: {
            src: [
                './asset/jsx/chat.jsx',
                './asset/jsx/chat/**/*.jsx'
            ],
            dest: './asset/js/chat.js'
        }
    };
};
