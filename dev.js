const path = require('node:path');
const fs = require('node:fs');
const { cwd } = require('node:process');

require('dotenv').config({
    path: '.env.path',
    quiet: true,
})
const { Paths } = require('./index');
console.log(Paths)
