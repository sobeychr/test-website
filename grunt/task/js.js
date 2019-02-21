'use strict';

module.exports = grunt => {
    const fApplyEnv = grunt.config.get('fApplyEnv');
    const isDev   = grunt.config.get('isDev');
    const isStage = grunt.config.get('isStage');
    const isLive  = grunt.config.get('isLive');
    var tasks = [];

    // COPY
    tasks.push('copy:jsmin');

    // BABEL
    tasks.push( fApplyEnv('babel') );

    // React
    tasks.push('browserify:react');
    if(isDev) {
        tasks.push('exorcise:react');
    }

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
