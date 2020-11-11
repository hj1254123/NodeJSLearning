// 导出方式分两种：exports module.exports
// exports === module.exports // true
// exports是module.exports的快捷方式，指向了其内存地址。
//   所以不能够改变exports的指向，真正导出的是module.exports


// // exports只能这样以属性方式添加需导出的方法

// exports.add = (a, b) => {
//     return a + b
// }

// exports.subtraction = (a, b) => {
//     return a - b
// }


// module.exports 导出方式
const add = (a, b) => {
    return a + b
}

const subtraction = (a, b) => {
    return a - b
}

// 这里如果：exports = {...},这就改变了exports的指向,导致导出了个空对象(`{}`)
// 因为真正导出的是module.exports。
module.exports = {
    add,
    subtraction
}
