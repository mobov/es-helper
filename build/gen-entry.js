const walk = require('walk')
const fs = require('fs')
const entry = {}
const walker = walk.walk("./src", {
	filters: ['core']
})

walker.on('file', (root, fileStats, next) => {
	console.log(fileStats)
	const name  =  fileStats.name.split('.')[0]
	entry[name] = name
	next()
	// fs.readFile(fileStats.name, function () {
	// 	// doStuff
	// 	next()
	// })
})
walker.on('end', () => {
	let indexStr = ''
	Object.keys(entry).forEach((list) => {
		indexStr += `export { default as ${list} } from './${list}' \n`
	})
	fs.writeFile('./lib/index.js', indexStr, () => {})
})
