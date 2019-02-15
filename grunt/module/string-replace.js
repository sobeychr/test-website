'use strict';

module.exports = grunt => {

    const regRoot = /^\//;
    const compileLinks = (list, reference) => {
        const {template, extension, rootPath} = templates[reference];
        const regExt = new RegExp('\.' + extension + '$');

        var links = list.map(entry => {
            let path = entry;

            if(!regRoot.test(path)) {
                path = rootPath + path;
            }
            if(!regExt.test(path)) {
                path += '.' + extension;
            }

            return template.replace('{{path}}', path);
        });

        return links.join('\n');
    };

    const path = require('path');
    const templateFolder = path.resolve('.', './static/template/');
    const templates = {
        'css': {
            template : grunt.file.read(templateFolder + '/css.html'),
            extension: 'css',
            rootPath : '/asset/css/'
        },
        'js': {
            template : grunt.file.read(templateFolder + '/js.html'),
            extension: 'js',
            rootPath : '/asset/js/'
        }
    };

    return {
        static: {
            files: [{
                expand: true,
                cwd: './static/',
                src:  ['*.html'],
                dest: './static-render/',
                ext:  '.html'
            }],
            options: {
                replacements: [
                    // CSS file links
                    {
                        pattern: /<!-- @import CSS (.+) -->/ig,
                        replacement: (match, pattern) => {
                            return compileLinks(pattern.split(' '), 'css')
                        }
                    },
                    // JS file links
                    {
                        pattern: /<!-- @import JS (.+) -->/ig,
                        replacement: (match, pattern) => {
                            return compileLinks(pattern.split(' '), 'js')
                        }
                    }
                ]
            }
        }
    };
};
