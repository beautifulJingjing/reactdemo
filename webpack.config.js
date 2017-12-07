const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin")
const RemoveWebpackPlugin = require('remove-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry:{
		app:["./src/main.js"]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react','stage-2']
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{ test: /\.less$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.less'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		}
	},
	plugins: [
		//new UglifyJsPlugin(),
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.[hash].js'
		}),
		new webpack.HotModuleReplacementPlugin(),
		//new RemoveWebpackPlugin(path.resolve(__dirname, "dist")),
		new HtmlWebpackPlugin({
			filename:'./index.html',
			template:'./index.html',
			inject:true,
			//hash: true,
			minify:{
				removeComments:true,
				collapseWhitespace:true
			}
		}),
	]
};