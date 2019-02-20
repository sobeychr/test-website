'use strict';

module.exports = grunt => {
    const isReload = grunt.config.get('isReload');
    var tasks = ['asset', 'static'];

    if(isReload) {
        tasks.push('watch');
    }

    grunt.registerTask('build', tasks);
};
