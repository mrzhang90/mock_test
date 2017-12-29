var Mock = require('mockjs');
var data = Mock.mock({
// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
'list|2': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'email': '@EMAIL',
    'number1|1-100.0-2': 1,
    'bool|1':true,
    'object|1-4':{
        '110000': '北京市',
        '120000': '天津市',
        '130000': '河北省',
        '140000': '山西省'
    },
    'array1|1':['AMD', 'CMD', 'KMD', 'UMD'],
    'array2|1-10':[{
    	"name|+1":[
    		"Hello",
    		"Mock.js",
    		"!"
    	]
    }],
    'function':function(){
    	return this.id
    },
 	'regexp1': /[a-z][A-Z][0-9]/,
 	'regexp2': /\w\W\s\S\d\D/,
 	'regexp3|1-5':/\d{5,10}\-/,
 	'absolutePath':'@email @array1',
 	'data':'@date',
}]
})
// 输出结果
// console.log(JSON.stringify(data, null, 4))
module.exports = JSON.stringify(data, null, 4)