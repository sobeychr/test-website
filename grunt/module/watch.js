'use strict';

module.exports = grunt => {
    const isReload = grunt.config.get('isReload');
    const fParseDate = grunt.config.get('fParseDate');

    var htmlOptions = {};
    if(isReload) {
        htmlOptions = {atBegin: true};
    }

    return {
        options: {
            spawn: false,
            dateFormat: time => {
                var timeStr = time.toString() + 'ms',
                    dateStr = fParseDate(new Date());

                grunt.log.writeln(
                    '>>> Watched completed in'['grey'],
                    timeStr['cyan'],
                    dateStr['grey']
                );
                grunt.log.writeln('...');
            },
            atBegin: isReload,
            livereload: isReload
        },
        css: {
            files: ['./asset/scss/**/*.scss'],
            tasks: ['css']
        },
        js: {
            files: [
                './asset/js-src/**/*.js',
                '!./asset/js-src/**/*.min.js'
            ],
            tasks: ['js']
        },
        html: {
            files: ['./static/**/*.html'],
            tasks: ['static']
        }
    };
};
