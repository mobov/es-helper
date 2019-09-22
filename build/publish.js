const shell = require('shelljs')

shell.cp('-rf', './types', './lib/types')
shell.cp('-rf', './package.json', './lib')
shell.cp('-rf', './README.md', './lib')
shell.cp('-rf', './CHANGELOG.md', './lib')
shell.cp('-rf', './tsconfig.json', './lib')
shell.exec(`
	npm run publish
`)
