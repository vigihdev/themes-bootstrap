#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { cwd } = require('process');
const envPath = path.join(cwd(), '.env.path')

// if (!fs.existsSync(envPath)) {
//     throw new Error(`❌ file .env.path tidak tersedia : ${envPath}`)
// }

require('dotenv').config({
    path: envPath,
    debug: false,
    encoding: 'utf8',
    quiet: true,
    override: true,
})

console.log(`✅ Install sadang berjalan ..... ${__filename}`)
spawnSync('touch', ['.tmp-install'])
const data = {
    cwd: cwd(),
    pwd: process.env.PWD,
}
fs.writeFileSync('.tmp-install', JSON.stringify(data));