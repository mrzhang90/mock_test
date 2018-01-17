var Mock = require('mockjs');
var data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'data|10': [{
			"id|+1": 10000,
			"image": "http://file.ydh123.com/user/photo/3f6ccf6a4ae3451b8d02e4fe727a65f2",
			"title":"@cparagraph",
			"link":"@url",
			"datetime":"@datetime('yyyy-MM-dd')",
			"game|1":[0,1,2,3,4,5,6,7,8,9]
		}]
})

var obj = {
	"code": 0,
	"msg": "",
	"count": 100
}
// 输出结果
// console.log(JSON.stringify(data, null, 4))
module.exports = JSON.stringify(Object.assign(data,obj))