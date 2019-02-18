'use strict';

module.exports = grunt => {
    const { assetLinks, assetExtensions } = require('./string-replace/assetlink')(grunt);

    return {
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
