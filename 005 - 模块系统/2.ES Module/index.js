// 要在使用 ES module 方式可选的方式有：
// - 在最近的package.json中加上{ "type": "module"}，
//   从当前路径一路往上找。
// - （不推荐这样做）把文件后缀改为.mjs
// - 在老版本(v12以前)的nodeJS上想使用 ES module 的话可以用 babel 编译。
import math from './math.js'

console.log(math.add(1, 2))