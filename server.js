/**
 * Created by yr on 2017/11/2.
 */
var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var app = new (require('express'))();
var config = require('./webpack.config.js');
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");

var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	noInfo: false,
	historyApiFallback: true,
	//inline: true,
	contentBase: path.join(__dirname, './'),
	stats: { colors: true }
})
// 通常用于加载静态资源
app.use(express.static(__dirname + '/public'))

app.get('*', function (request, response){
	response.sendFile(path.resolve(__dirname, '/', 'index.html'))
})
app.listen(8080, '127.0.0.1', function (err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:8080');
});