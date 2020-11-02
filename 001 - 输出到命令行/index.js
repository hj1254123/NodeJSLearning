// Node提供console模块，给命令行进行交互。基本上跟浏览器的console对象相同。

/**
 * 1.基本输出：console.log()
 * 
 * 通过传入变量和格式说明符来格式化用语
 * - %s 会格式化变量为字符串
 * - %d 会格式化变量为数字
 * - %i 会格式化变量为其整数部分
 * - %o 会格式化变量为对象
 */
let a = 2
let b = '猫'
let c = 2.1
let d = { name: 'jo', age: 18 }
console.log('我有%d只%s', a, b)
console.log('保留变量c的整数部分：%i', c)
console.log('格式化变量为对象：%o', d)
/**
 * 输出：
 * 我有2只猫
 * 保留变量c的整数部分：2
 * 格式化变量为对象：{ name: 'jo', age: 18 }
 */

/**
 * 2.情况控制台
 * console.clear()
 */

/**
 * 3.记录一段代码的执行次数
 * console.count()
 */

// 还可以用来记录一段代码执行次数
let xun = '执行次数'
for(let i = 0; i < 3; i++) {
    console.count(xun)
}

let printCount = '调用了print函数'
let print = () => {
    console.count(printCount)
}
print()
print()

/*
输出：
/*
执行次数: 1
执行次数: 2
执行次数: 3
调用了print函数: 1
调用了print函数: 2
*/

/**
 * 4.计算耗时
 * console.time()
 * console.timeEnd()
 */
const measureDoingSomething = () => {
    console.time('测试执行时间')
    // 中间做一些事，最后会显示执行这段代码所用时间，参数必须相同
    console.log('测试');
    console.timeEnd('测试执行时间')
}
measureDoingSomething()

console.log('\x1b[33m%s\x1b[0m', '你好')
