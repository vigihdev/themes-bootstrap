const path = require('node:path');
const fs = require('node:fs');
const { cwd } = require('node:process');

require('dotenv').config({
    path: '.env.path',
    quiet: true,
})
// const { Paths } = require('./index');
// console.log(Paths)

const assetPath = path.join(__dirname, 'src', 'assets');
const itemDirs = fs.readdirSync(assetPath);
itemDirs.forEach(dir => {
    const scssDir = path.join(assetPath, dir, 'src', 'scss');
    if (fs.existsSync(scssDir)) {
        var scssFile = fs.readdirSync(scssDir)
            ?.filter(f => f.slice(0, 1) !== '_')
            .filter(f => fs.lstatSync(path.join(scssDir, f)).isFile())
            .pop();
    }
    // scssFile = path.join(scssDir, scssFile)
    // console.log(scssFile);
})

const dstPath = path.resolve(cwd(), 'src', 'assets', 'asset--import');
const dstFilePath = path.join(dstPath, '_index.scss');
const srcPath = path.resolve(cwd(), '..', 'themes-styles', 'src', 'assets', 'assets');
const relativePath = path.relative(dstPath, srcPath);
const relativeFile = path.join(relativePath, 'assets.scss');
console.log([
    srcPath,
    dstFilePath,
    srcPath,
    relativePath
].join("\n"));
console.log(relativeFile);