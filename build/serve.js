const path = require('path')
const webpack = require('webpack')
const eslintLoader = require('eslint-loader')
module.exports = {
	entry: './example/main.js',
	devtool: 'source-map',
	watch: true,
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, '../example/'),
		open: true,
		port: 9001,
		hot: true,
		host: 'localhost',
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
}
