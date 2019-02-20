'use strict';

module.exports = grunt => {
    const tasks = {
        '00'  : '',
        'css' : 'Builds CSS from SASS and Autoprefixer',
        'js'  : 'Compiles JS from \'js-src/\' folder',
        'static': 'Compiles static HTML pages',
        '01' : '',
        'asset' : 'Executes CSS and JS commands',
        'watch' : 'Watches HTML, CSS and JS source files',
        'watch --reload' : 'Watches files with "live reload"',
        '02' : '',
        '--env=(dev|stage|live)' : 'runs as "dev", "stage" or "live" configs'
    };

    grunt.registerTask('default', () => {
        grunt.log.write('No task selected'['red']);
        grunt.log.writeln(', please select from the list below:');

        for(let command in tasks)
        {
            let desc = tasks[command];
            if(desc.length === 0) {
                grunt.log.writeln('--');
            }
            else {
                grunt.log.write(command['cyan']);
                grunt.log.writeln(' : ' + desc);
            }
        }
    });
};
