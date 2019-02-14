'use strict';

module.exports = grunt => {
    require('./grunt/configs.js')(grunt);
    
    const pkg = grunt.file.readJSON('./package.json');
    const now = grunt.template.today('yyyy-mm-dd HH:MM::ss');

    var configs  = require('./grunt/tasks.js')(grunt);
    configs.pkg  = pkg;
    configs.date = now;

    grunt.config.init(configs);
};
