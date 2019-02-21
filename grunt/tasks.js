'use strict';

module.exports = grunt => {
    var configs = {};
    const dirModule = './module/';
    const dirTask   = './task/';
    const modules = {
            'autoprefixer': 'grunt-autoprefixer',
            'babel':        'grunt-babel',
            'browserify':   'grunt-browserify',
            'clean':    'grunt-contrib-clean',
            'copy':     'grunt-contrib-copy',
            'exorcise': 'grunt-exorcise',
            'htmlmin': 'grunt-contrib-htmlmin',
            'sass':    'grunt-contrib-sass',
            'string-replace':'grunt-string-replace',
            'uglify': 'grunt-contrib-uglify',
            'watch':  'grunt-contrib-watch'
        };

    // Loads modules
    for(let command in modules)
    {
        let file   = dirModule + command + '.js',
            module = modules[command];

        configs[command] = require(file)(grunt);
        grunt.loadNpmTasks(module);
    }

    // Loads tasks
    grunt.file.recurse('./grunt/' + dirTask, (abspath, rootdir, subdir, filename) => {
        require(dirTask + filename)(grunt);
    });

    return configs;
};
