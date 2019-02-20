'use strict';

module.exports = grunt => {

    const fGetTemplate = grunt.config.get('fGetTemplate');

    const assetExtensions = ['css', 'js'];
    const regRoot = /^\//;

    const assetLinks = (extension, list) => {
        const template = fGetTemplate(extension);
        const rootPath = '/asset/' + extension + '/';
        const regExt = new RegExp('\.' + extension + '$');

        var links = list.filter(entry => entry.trim().length > 0).map(entry => {
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

    return {
        assetLinks,
        assetExtensions
    };
};
