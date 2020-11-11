// 引入方式一：
const math = require('./math.js')

console.log(math.add(1, 1)) // 2
console.log(math.subtraction(2, 1)) // 1



// // 引入方式二：
// const { add, subtraction } = require('./Math.js')

// console.log(add(1, 2)) // 3
// console.log(subtraction(3, 1)) //2