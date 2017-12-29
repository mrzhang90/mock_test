var express = require('express');
var Mock = require('mockjs');
var swig  = require('swig');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())//添加json解析器 

//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
//mockJS页面是引用mockJS，路由自己配置，json生成轻松
app.get('/mockJS',function (req, res) {
	var template = swig.compileFile('mockJS.html');  
	var output = template({
	    title: 'mock数据模拟'
	});
	res.end(output)
})
//rap是引用阿里的RAP，功能全面，界面化，效率
app.get('/rap',function (req, res) {
	var template = swig.compileFile('RAP.html');
	var output = template();
	res.end(output)
})
app.get('/test',function (req, res) {
	var template = swig.compileFile('test.html');
	var output = template();
	res.end(output)
})
app.get('/',function (req, res) {
	res.end(require('./index'));
});
app.get('/user/id/:id',function (req, res) {
  	res.end(require('./user'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});