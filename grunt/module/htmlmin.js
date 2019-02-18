'use strict';

module.exports = grunt => {
    return {
        static: {
            options: {
                collapseBooleanAttributes: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                decodeEntities: true,
                //ignoreCustomFragments: [],
                preventAttributesEscaping: true,
                quoteCharacter: '"',
                removeComments: true,
                removeEmptyAttributes: true
            },
            files: [{
                expand: true,
                cwd: './www/',
                src:  ['**/*.html'],
                dest: './www/',
                ext:  '.html'
            }]
        }
    };
};
