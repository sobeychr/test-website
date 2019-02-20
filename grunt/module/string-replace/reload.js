'use strict';

module.exports = grunt => {
    return {
        files: [{
            expand: true,
            cwd: './www/',
            src:  ['*.html'],
            dest: './www/',
            ext:  '.html'
        }],
        options: {
            replacements: [
                {
                    pattern: '<head>',
                    replacement: '<head><script src="//localhost:35729/livereload.js"></script>'
                }
            ]
        }
    };
};
