'use strict';

module.exports = grunt => {
    return {
        jsmin: {
            files: [{
                expand: true,
                cwd: './asset/js-src/',
                src:  ['**/*.min.js'],
                dest: './asset/js/',
                ext:  '.min.js',
                filter: 'isFile'
            }]
        }
    };
};
