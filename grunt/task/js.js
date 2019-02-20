'use strict';

module.exports = grunt => {
    const fApplyEnv = grunt.config.get('fApplyEnv');
    const isStage = grunt.config.get('isStage');
    const isLive  = grunt.config.get('isLive');
    var tasks = [];

    // COPY
    tasks.push('copy:jsmin');

    // BABEL
    tasks.push( fApplyEnv('babel') );

    // UGLIFY
    if(isStage || isLive) {
        tasks.push( fApplyEnv('uglify') );
    }

    // CLEAN
    if(isLive) {
        tasks.push('clean:jslive');
    }

    grunt.registerTask('js', tasks);
};
