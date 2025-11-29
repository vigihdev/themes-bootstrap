// paths.js
const path = require("path");

const envs = [
    process.env?.BASEPATH_THEMES_STYLES,
    process.env?.NODE_MODULES_THEMES_STYLES,
    process.env?.ASSETS_THEMES_STYLES,
];

envs.forEach(env => {
    if (typeof env !== 'string') {
        throw new Error(`Env ${env} is not defined`);
    }
});


const BASEPATH = path.resolve(process.env.PWD, process.env.BASEPATH_THEMES_STYLES);
const NODE = path.resolve(process.env.PWD, process.env.NODE_MODULES_THEMES_STYLES);
const ASSETS = path.resolve(process.env.PWD, process.env.ASSETS_THEMES_STYLES)

module.exports.Paths = {
    BASEPATH: BASEPATH,
    ASSETS: ASSETS,
    NODE: NODE,
}
