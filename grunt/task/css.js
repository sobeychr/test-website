'use strict';

module.exports = grunt => {
    const fApplyEnv = grunt.config.get('fApplyEnv');
    const isLive = grunt.config.get('isLive');
    var tasks  = [];

    // SASS
    tasks.push( fApplyEnv('sass') );

    // AUTOPREFIXER
    tasks.push('autoprefixer');

    // CLEAN
    if(isLive) {
        tasks.push('clean:csslive');
    }

    grunt.registerTask('css', tasks);
};
