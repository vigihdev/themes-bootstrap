const path = require('node:path');

require('dotenv').config({ path: '.env.path' })
const { Paths } = require('./index');
const { ThemesStyleSass } = require('./src/sass/themes-styles-sass');
const { cwd } = require('node:process');
const { writeFileSync } = require('node:fs');
// console.log(Paths)

