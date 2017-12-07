var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var webpack = require('webpack')

var env = process.env.NODE_ENV
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd
module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: config.build.assetsRoot,
		publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.less'],
		fallback: [path.join(__dirname, '../node_modules')],
		alias: {
			'@': path.resolve(__dirname, '../src'),
		}
	},
	resolveLoader: {
		fallback: [path.join(__dirname, '../node_modules')]
	},
	module: {
		loaders : [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: projectRoot,
				exclude: /node_modules/,
				options: {
					presets: ['es2015', 'react','stage-2']
				}
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('images/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.css$/,
				loaders:[
					"style-loader",
					"css-loader?modules=true"
				]
			},
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
		]
	}
}
