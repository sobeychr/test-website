'use strict';

module.exports = grunt => {
    const files = [{
            expand: true,
            cwd: './asset/scss/',
            src:  ['**/*.scss'],
            dest: './asset/css/',
            ext:  '.css'
        }];

    return {
        options: {
            cacheLocation: './grunt/.sass-cache',
            unixNewlines: true
        },
        dev: {
            files,
            options: {
                sourcemap: 'auto',
                style: 'expanded',
                trace: true
            }
        },
        stage: {
            files,
            options: {
                sourcemap: 'auto',
                style: 'compact'
            }
        },
        live: {
            files,
            options: {
                sourcemap: 'none',
                style: 'compressed'
            }
        }
    };
};
