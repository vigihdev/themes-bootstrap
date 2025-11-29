'use strict';

const path = require('node:path');
const { Paths } = require('../config/paths');

const BASEPATH = Paths.ASSETS;

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
        FONT: path.join(BASEPATH, 'font'),
        ANIMATE: path.join(BASEPATH, 'animate'),
        ELEVATION: path.join(BASEPATH, 'elevation'),
        UTILITIES: path.join(BASEPATH, 'utilities'),
        TYPOGRAPHY: path.join(BASEPATH, 'typography'),
        MATERIAL_ICONS: path.join(BASEPATH, 'material-icons'),
        GUTTERS: path.join(BASEPATH, 'gutters')
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
            [`${PATHS.OUTS.DIST.CSS}/font.css`]: `${PATHS.LIBRARIES.FONT}/src/scss/font.scss`,
            [`${PATHS.OUTS.DIST.CSS}/animate.css`]: `${PATHS.LIBRARIES.ANIMATE}/src/scss/animate.scss`,
            [`${PATHS.OUTS.DIST.CSS}/elevation.css`]: `${PATHS.LIBRARIES.ELEVATION}/src/scss/elevation.scss`,
            [`${PATHS.OUTS.DIST.CSS}/utilities.css`]: `${PATHS.LIBRARIES.UTILITIES}/src/scss/utilities.scss`,
            [`${PATHS.OUTS.DIST.CSS}/typography.css`]: `${PATHS.LIBRARIES.TYPOGRAPHY}/src/scss/typography.scss`,
            [`${PATHS.OUTS.DIST.CSS}/material-icons.css`]: `${PATHS.LIBRARIES.MATERIAL_ICONS}/src/scss/material-icons.scss`,
            [`${PATHS.OUTS.DIST.CSS}/gutters.css`]: `${PATHS.LIBRARIES.GUTTERS}/src/scss/gutters.scss`
        }
    }
};

// Builds Configuration
const buildsConfig = {
    js: Object.keys({}),
    css: Object.keys(sass.dist.files)
};

const watch = {
    css: [
        `${BASEPATH}/*/src/scss/*.scss`,
        `${BASEPATH}/*/src/scss/*/*.scss`,
        `${BASEPATH}/*/src/scss/*/*/*.scss`,
        `${BASEPATH}/*/src/scss/*/*/*/*.scss`,
        `${BASEPATH}/*/src/scss/*/*/*/*/*.scss`,
    ]
}

module.exports.ThemesStyleSass = {
    basepath: Paths.BASEPATH,
    sass: sass,
    builds: {
        concat_css: {
            main: {
                files: {
                    [`${PATHS.OUTS.BUILDS.CSS}/themes-styles.css`]: buildsConfig.css
                },
            }
        },
    },
    watch: watch
};