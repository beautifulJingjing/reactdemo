/**
 * Created by yr on 2017/8/23.
 */
var express = require('express');
var path = require('path')
var app = express()
var PORT = process.env.PORT || '3008';


var static = express.static(path.join(__dirname, './dist/static'))
app.use('/static', static)

app.get('*',function (req, res) {
	//到达日志
	res.sendFile(path.join(__dirname, './dist/index.html'))
})

console.log(`listening ${PORT}`)
app.listen(PORT)
module.exports = app;
