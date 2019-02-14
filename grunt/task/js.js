'use strict';

module.exports = grunt => {
    var fApplyEnv = grunt.config.get('fApplyEnv'),
        isStage = grunt.config.get('isStage'),
        isLive  = grunt.config.get('isLive'),
        tasks = [];

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
