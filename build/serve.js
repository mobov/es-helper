const path = require('path')

module.exports = {
	entry: './example/main.js',
	devtool: 'source-map',
	watch: true,
	mode: 'none',
	devServer: {
		contentBase: path.join(__dirname, '../example/'),
		open: true,
		port: 9001,
		hot: true,
		host: 'localhost',
	},
}
