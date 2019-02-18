'use strict';

module.exports = grunt => {
    var tasks  = [];

    // Compiles templates
    tasks.push('string-replace:static');

    grunt.registerTask('static', tasks);
};
