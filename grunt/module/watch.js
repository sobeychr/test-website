'use strict';

module.exports = grunt => {

    /*
    grunt.event.on('watch', (action, filepath, target) => {
        grunt.log.writeln('>> watch', action, filepath, target);
    });
    */
    const fParseDate = grunt.config.get('fParseDate');

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
            }
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
