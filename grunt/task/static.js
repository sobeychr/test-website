'use strict';

module.exports = grunt => {
    const isStage = grunt.config.get('isStage');
    const isLive  = grunt.config.get('isLive');
    const isReload = grunt.config.get('isReload');
    var tasks = [];

    // Compiles templates
    tasks.push('string-replace:static');

    // HTMLMIN
    if(isStage || isLive) {
        tasks.push('htmlmin:static');
    }

    // LIVERELOAD
    if(isReload) {
        tasks.push('string-replace:reload');
    }

    grunt.registerTask('static', tasks);
};
