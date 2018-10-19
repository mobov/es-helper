const fs = require('fs')
const util = require('util')
let {exec,spawn } = require('child_process');
exec = util.promisify(exec)
const copyFile = util.promisify(fs.copyFile)
const {registry} = require('yargs').argv

;(async () => {
    await copyFile('package.json', './lib/package.json')
    await copyFile('README.md', './lib/README.md')
    const ls=spawn(`yarn build && cd ./lib && nrm use ${registry} && npm publish --access=public`,{
        shell:true
    })
    ls.stdout.on('data', (data) => {
        console.log(`${data}`);
    });
    ls.stderr.on('data', (data) => {
        console.log(`${data}`);
    });
})()
