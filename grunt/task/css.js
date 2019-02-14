'use strict';

module.exports = grunt => {
    var fApplyEnv = grunt.config.get('fApplyEnv'),
        isLive = grunt.config.get('isLive'),
        tasks  = [];

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
