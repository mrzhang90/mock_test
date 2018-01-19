var express = require('express');
var Mock = require('mockjs');
var swig  = require('swig');
var path  = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())//添加json解析器 
app.use(express.static('views'));
//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
//list
app.get('/list',function (req, res) {
	var template = swig.compileFile(path.join(__dirname,'/views/list/','index.html'));  
	var output = template({
	    title: 'mock数据模拟'
	});
	res.end(output)
})
//轮播图
app.get('/picture_date',function (req, res) {
	var data = Mock.mock({
		// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
		'data|10': [{
				"sort|+1": 1,
				"image": Mock.Random.image('200x100',Mock.mock('@color'), 'HELLO'),
				"title":"@cparagraph",
				"link":"http://www.baidu.com",
				"datetimeStart":"@datetime('yyyy-MM-dd')",
				"datetimeEnd":"@datetime('yyyy-MM-dd')",
				"state|1":[0,1]
			}]
	})

	var obj = {
		"code": 0,
		"msg": "",
		"count": 11
	}
	res.send(JSON.stringify(Object.assign(data,obj)))
})
app.get('/list_date',function (req, res) {
	var data = Mock.mock({
		// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
		'data|10': [{
				"sort|+1": 1,
				"image": Mock.Random.image('200x100',Mock.mock('@color'), 'HELLO'),
				"title":"@cparagraph",
				"link":"http://www.baidu.com",
				"datetimeStart":"@datetime('yyyy-MM-dd')",
				"datetimeEnd":"@datetime('yyyy-MM-dd')",
				"game1|1":['浦发北分与中信建投篮球友谊赛','【邀请赛】第五届北京MBA篮球联赛','第五届北京市MBA篮球联赛'],
				"game2|1":['采购部VS项目联队','总图地质所VS仪控设计所','采购部VS总图地质所'],
				"state|1":[0,1]
			}]
	})

	var obj = {
		"code": 0,
		"msg": "",
		"count": 100
	}
	res.send(JSON.stringify(Object.assign(data,obj)))
})
app.get('/select_date',function (req, res) {
	let pid;
	var json;
	if(req.originalUrl.indexOf('=')!=-1){
		pid=req.originalUrl.split('=')[1];
		json = Mock.mock({
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			'data|6': [{
					"Value|+1": 20,
					"Display|1":['第1一队','第2二队','第3队','第四队','第五队']
				}]
		})
	}else{
		json = Mock.mock({
			// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
			'data|3': [{
					"Value|+1": 10,
					"Display|1":['第一队','第二队','第三队','第四队','第五队']
				}]
		})
	}
	res.send(json.data)
})
app.get('/delete_date',function (req, res) {
	var data = Mock.mock({'data|1':true })
	var obj = {
		"code": 0,
		"msg": "失败了",
		"count": 1000
	}
	res.send(JSON.stringify(Object.assign(data,obj)))
})
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