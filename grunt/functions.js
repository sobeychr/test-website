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

    const fLeadingZeros = (numbers, zeros=2) => {
        var str = numbers.toString();
        return '0'.repeat(
                Math.max(0, zeros - str.length)
            ) + str;
    };

    const fParseDate = (date, showDate=false) => {
        var timeStr = [
            fLeadingZeros( date.getHours()   ),
            fLeadingZeros( date.getMinutes() ),
            fLeadingZeros( date.getSeconds() )
        ].join(':');

        if(showDate) {
            var dateStr = [
                fLeadingZeros( date.getFullYear() ),
                fLeadingZeros( date.getMonth()    ),
                fLeadingZeros( date.getDate()     )
            ].join('-');

            timeStr = dateStr + ' ' + timeStr;
        }

        return timeStr;
    };

    grunt.config.set('fApplyEnv',     fApplyEnv);
    grunt.config.set('fGetTemplate',  fGetTemplate);
    grunt.config.set('fLeadingZeros', fLeadingZeros);
    grunt.config.set('fParseDate',    fParseDate);
};
