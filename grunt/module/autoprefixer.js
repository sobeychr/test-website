'use strict';

module.exports = grunt => {
    const pkg = grunt.file.readJSON('./package.json');
    const browsers = pkg.browserslist;

    return {
        options: {
            browsers,
            map: false,
            remove: false
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
