// 在执行这个文件时，可以带参数如：node index.js name="monkey" age="18"

// 通过下面的方法就可以获取到参数信息，参数1：node所在路径 参数2：执行文件所在路径，其他为传入参数
console.log(process.argv)
/**
 输出：
  [
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Git\\NodeJSLearning\\000 - 从命令行接收参数\\index.js',
  'name=monkey',
  'age=17'
]
 */ 

// 通过slice方法可以仅获取参数，排除前两个参数
let argv = process.argv.slice(2)
console.log(argv)
/*
输出：
[ 'name=monkey', 'age=17' ]
*/

/**
 * 这样还需要处理字符串有点麻烦
 * 最简单的是使用 https://www.npmjs.com/package/minimist 库来解析参数
 * 使用方式见上面链接
 */