'use strict';

module.exports = grunt => {
    
    const fApplyEnv = task => {
        var isDev   = grunt.config.get('isDev'),
            isStage = grunt.config.get('isStage'),
            isLive  = grunt.config.get('isLive');

        if(isDev) {
            return task + ':dev';
        }
        else if(isStage) {
            return task + ':stage';
        }
        else if(isLive) {
            return task + ':live';
        }

        return task;
    };

    grunt.config.set('fApplyEnv', fApplyEnv);
};
