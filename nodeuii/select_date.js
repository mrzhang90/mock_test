var Mock = require('mockjs');
var data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'data|3': [{
			"Value|+1": 10,
			"Display|1":['第一队','第二队','第三队','第四队','第五队']
		}]
})

// 输出结果
// console.log(JSON.stringify(data, null, 4))
module.exports = JSON.stringify(data.data, null, 4)