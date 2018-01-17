var Mock = require('mockjs');
var data = Mock.mock({
	// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
	'data|6': [{
			"Value|+1": 20,
			"Display|1":['第1一队','第2二队','第3队','第四队','第五队']
		}]
})

// 输出结果
// console.log(JSON.stringify(data, null, 4))
module.exports = JSON.stringify(data.data, null, 4)