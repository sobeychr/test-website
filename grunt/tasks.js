'use strict';

module.exports = grunt => {
    var configs = {};
    const dirModule = './module/';
    const dirTask   = './task/';
    const modules = {
            'autoprefixer': 'grunt-autoprefixer',
            'babel': 'grunt-babel',
            'clean': 'grunt-contrib-clean',
            'copy':  'grunt-contrib-copy',
            'sass':  'grunt-contrib-sass'
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
