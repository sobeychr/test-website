'use strict';

module.exports = grunt => {
    const { assetLinks, assetExtensions } = require('./string-replace/assetlink')(grunt);
    const reload = require('./string-replace/reload')(grunt);

    return {
        reload,
        static: {
            files: [{
                expand: true,
                cwd: './static/',
                src:  ['*.html'],
                dest: './www/',
                ext:  '.html'
            }],
            options: {
                replacements: [
                    {
                        pattern: /<!-- @import ([A-Z]+) (.+) -->/ig,
                        replacement: (match, template, pattern) => {
                            template = template.toLowerCase();

                            if(assetExtensions.indexOf(template) >= 0) {
                                return assetLinks(template, pattern.split(' '));
                            }

                            return '';
                        }
                    }
                ]
            }
        }
    };
};
