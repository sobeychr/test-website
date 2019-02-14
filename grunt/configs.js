'use strict';

module.exports = grunt => {
    var env = grunt.option('env');

    const isDev   = typeof(env) === 'undefined' || env === 'dev';
    const isStage = typeof(env) !== 'undefined' && env === 'stage';
    const isLive  = typeof(env) !== 'undefined' && env === 'live';

    grunt.config.set('env', env);
    grunt.config.set('isDev',   isDev);
    grunt.config.set('isStage', isStage);
    grunt.config.set('isLive',  isLive);
};
