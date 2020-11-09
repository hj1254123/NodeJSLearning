/**
 * nodejs提供了两套API来操作URL
 * - 历史遗留的querystring
 * - 实现了WHATWG标准的新API -->URL
 * 
 */

//  URL类
//  Nodejs中的URL类和浏览器中的完全兼容，可以通过require('url').URL 或 全局变量URL使用。
console.log('比较两个API', require('url').URL === URL) //true


// new URL(input[, base])：实例化一个 URL 对象,来使用。
// input：URL，在为绝对路径时省略base参数。
// base：基础路径，在input是相对路径时使用，自动算出最终路径。


// 例子：
let myURL = new URL('https://mima:123@127.0.0.1:3000/search?q=test&rlz=1C1SQJL_enTW898TW898#123')
/**
* URL 实例属性
    • url.hash: #后面的值
    • url.host: 主机名包含端口号(如果设置了的话)
    • url.hostname：主机名
    • url.href：完整的url
    • url.origin：协议名 + 主机名 + 端口
    • url.username：返回域名前面指定的用户名
    • url.password：返回域名前面指定的密码
    • url.pathname：以/开头的url路径
    • url.port：端口
    • url.protocol：协议名
    • url.search：以?开头的查询参数字符串
    • url.serachParam：包含查询参数的对象
 */
console.log(myURL.hash);// #123
console.log(myURL.host); //127.0.0.1:3000
console.log(myURL.hostname); // 127.0.0.1
console.log(myURL.href); //https://mima:123@127.0.0.1:3000/search?q=test&rlz=1C1SQJL_enTW898TW898#123
console.log(myURL.origin); // https://127.0.0.1:3000
console.log(myURL.username); // mima
console.log(myURL.password); // 123
console.log(myURL.pathname); // /search
console.log(myURL.port); // 3000
console.log(myURL.protocol); // https:
console.log(myURL.search); // ?q=test&rlz=1C1SQJL_enTW898TW898
console.log(myURL.searchParams); // URLSearchParams { 'q' => 'test', 'rlz' => '1C1SQJL_enTW898TW898' }

// 例子2：
// 解析url的文件名可以结合path模块使用
const path = require('path');

const { pathname } = new URL('/foo/bar.txt', 'https://example.org/');

console.log(path.basename(pathname)) // bar.txt
console.log(path.parse(pathname)) 
// { root: '/', dir: '/foo', base: 'bar.txt', ext: '.txt', name: 'bar' }