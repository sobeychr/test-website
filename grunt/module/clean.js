'use strict';

module.exports = grunt => {
    return {
        csslive: ['./asset/css/**/*.css.map'],
        jslive:  ['./asset/js/**/*.js.map']
    };
};
