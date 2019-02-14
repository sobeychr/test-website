'use strict';

module.exports = grunt => {
    var isDev   = grunt.config.get('isDev'),
        isStage = grunt.config.get('isStage'),
        isLive  = grunt.config.get('isLive'),
        tasks = [];

    // COPY
    tasks.push('copy:jsmin');

    // BABEL
    tasks.push('babel:jsmin');

    grunt.registerTask('js', tasks);
};
