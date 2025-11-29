// paths.js
const path = require("path");

const envs = [
    process.env?.BASEPATH_THEMES_BOOTSTRAP,
    process.env?.NODE_MODULES_THEMES_BOOTSTRAP,
    process.env?.ASSETS_THEMES_BOOTSTRAP,
];

envs.forEach(env => {
    if (typeof env !== 'string') {
        throw new Error(`Env ${env} is not defined`);
    }
});


const BASEPATH = path.resolve(process.env.PWD, process.env.BASEPATH_THEMES_BOOTSTRAP);
const NODE = path.resolve(process.env.PWD, process.env.NODE_MODULES_THEMES_BOOTSTRAP);
const ASSETS = path.resolve(process.env.PWD, process.env.ASSETS_THEMES_BOOTSTRAP)

module.exports.Paths = {
    BASEPATH: BASEPATH,
    ASSETS: ASSETS,
    NODE: NODE,
}
