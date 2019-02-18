'use strict';

module.exports = grunt => {
    var isStage = grunt.config.get('isStage'),
        isLive  = grunt.config.get('isLive'),
        tasks = [];

    // Compiles templates
    tasks.push('string-replace:static');

    // HTMLMIN
    if(isStage || isLive) {
        tasks.push('htmlmin:static');
    }

    grunt.registerTask('static', tasks);
};
