'use strict';

module.exports = grunt => {
    return {
        options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
        },
        dist: {
            files: [{
                expand: true,
                cwd: './asset/css/',
                src:  [
                    '**/*.css',
                    '!**/*.css.map'
                ],
                dest: './asset/css/',
                ext:  '.css'
            }]
        }
    };
};
