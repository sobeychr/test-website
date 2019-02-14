'use strict';

module.exports = grunt => {
    return {
        options: {
            spawn: false
        },
        css: {
            files: ['./asset/scss/**/*.scss'],
            tasks: ['css']
        },
        js: {
            files: [
                './asset/js-src/**/*.js',
                '!./asset/js-src/**/*.min.js'
            ],
            tasks: ['js']
        }
    };
};
