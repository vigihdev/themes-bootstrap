// themes-bootstrap.js
'use strict';

const path = require('node:path');
const fs = require('node:fs');
const { Paths } = require('../config/paths');

const BASEPATH = Paths.ASSETS

const PATHS = {
    OUTS: {
        DIST: {
            CSS: path.join(Paths.BASEPATH, 'dist', 'css'),
            JS: path.join(Paths.BASEPATH, 'dist', 'js')
        },
        BUILDS: {
            CSS: path.join(Paths.BASEPATH, 'builds', 'css'),
            JS: path.join(Paths.BASEPATH, 'builds', 'js')
        },
    },
    LIBRARIES: {
        CHECKBOX: path.join(BASEPATH, 'checkbox'),
        FORM: path.join(BASEPATH, 'form'),
        LOADERS: path.join(BASEPATH, 'loaders'),
        RADIO_GROUP: path.join(BASEPATH, 'radio-group'),
        SWITCH: path.join(BASEPATH, 'switch'),
        VENDOR: path.join(BASEPATH, 'vendor')
    }
};

// Sass Configuration
const sass = {
    dist: {
        options: {
            sourceMap: false,
            'no-source-map': true,
            style: 'expanded'
        },
        files: {
            [`${PATHS.OUTS.DIST.CSS}/checkbox.css`]: `${PATHS.LIBRARIES.CHECKBOX}/src/scss/checkbox.scss`,
            [`${PATHS.OUTS.DIST.CSS}/form.css`]: `${PATHS.LIBRARIES.FORM}/src/scss/form.scss`,
            [`${PATHS.OUTS.DIST.CSS}/loaders.css`]: `${PATHS.LIBRARIES.LOADERS}/src/scss/loaders.scss`,
            [`${PATHS.OUTS.DIST.CSS}/radio-group.css`]: `${PATHS.LIBRARIES.RADIO_GROUP}/src/scss/radio-group.scss`,
            [`${PATHS.OUTS.DIST.CSS}/switch.css`]: `${PATHS.LIBRARIES.SWITCH}/src/scss/switch.scss`,
            [`${PATHS.OUTS.DIST.CSS}/vendor.css`]: `${PATHS.LIBRARIES.VENDOR}/src/scss/vendor.scss`,
        }
    }
};

// Concat Configuration
const concatFiles = {
    js: {
        [`${PATHS.OUTS.DIST.JS}/checkbox.js`]: `${PATHS.LIBRARIES.CHECKBOX}/src/js/*.js`,
        [`${PATHS.OUTS.DIST.JS}/form.js`]: `${PATHS.LIBRARIES.FORM}/src/js/*.js`,
        [`${PATHS.OUTS.DIST.JS}/switch.js`]: `${PATHS.LIBRARIES.SWITCH}/src/js/*.js`,
        [`${PATHS.OUTS.DIST.JS}/loaders.js`]: `${PATHS.LIBRARIES.LOADERS}/src/js/*.js`,
        [`${PATHS.OUTS.DIST.JS}/vendor.js`]: `${PATHS.LIBRARIES.VENDOR}/src/js/*.js`,
        [`${PATHS.OUTS.DIST.JS}/radio-group.js`]: `${PATHS.LIBRARIES.RADIO_GROUP}/src/js/*.js`,
    },
    css: {}
};

// Builds Configuration
const buildsConfig = {
    js: Object.keys(concatFiles.js)?.filter(f => fs.existsSync(f)),
    css: Object.keys(sass.dist.files)?.filter(f => fs.existsSync(f))
};

const watch = {
    js: [
        `${BASEPATH}/*/src/js/*.js`,
        `${BASEPATH}/*/src/js/*/*.js`,
        `${BASEPATH}/*/src/js/*/*/*.js`,
    ],
    css: [
        `${BASEPATH}/*/src/scss/*.scss`,
        `${BASEPATH}/*/src/scss/*/*.scss`,
        `${BASEPATH}/*/src/scss/*/*/*.scss`,
        `${BASEPATH}/*/src/scss/*/*/*/*.scss`,
    ]
}

module.exports.ThemesBootstrapSass = {
    basepath: Paths.BASEPATH,
    sass: sass,
    concat: {
        options: {
            separator: ';'
        },
        dist: {
            files: { ...concatFiles.js },
        },
    },
    builds: {
        concat: {
            dist: {
                files: {
                    [`${PATHS.OUTS.BUILDS.JS}/themes-bootstrap.js`]: buildsConfig.js,
                },
            },
        },
        concat_css: {
            main: {
                files: {
                    [`${PATHS.OUTS.BUILDS.CSS}/themes-bootstrap.css`]: buildsConfig.css,
                },
            }
        },
    },
    watch: watch
};