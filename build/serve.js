const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './example/main.ts',
	devtool: 'source-map',
	watch: true,
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, '../example/'),
		open: true,
		port: 9005,
		hot: true,
		host: 'localhost',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin()
	],
}

