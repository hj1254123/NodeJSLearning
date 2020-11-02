// 这个包可以创建进度条
// 详细配置https://www.npmjs.com/package/progress
const ProgressBar = require('progress')

// :bar 代办进度条本身 :percent 显示百分比；
// total 进度条长度
// 下面代码100毫秒走一步，总共10步，也就是1s进度条到100%。
const bar = new ProgressBar(':bar :percent', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)