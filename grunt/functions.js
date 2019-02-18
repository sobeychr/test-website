'use strict';

module.exports = grunt => {
    
    const path = require('path');
    const templateFolder = path.resolve('.', './static/template/');

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

    const fGetTemplate = filename => {
        const tplPath = path.resolve(templateFolder, filename + '.html');
        return grunt.file.read(tplPath);
    };

    grunt.config.set('fApplyEnv', fApplyEnv);
    grunt.config.set('fGetTemplate', fGetTemplate);
};
