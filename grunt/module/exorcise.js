'use strict';

module.exports = grunt => {
    return {
        react: {
            files: {
                './asset/js/chat.js.map': ['./asset/js/chat.js']
            }
        }
    };
};
