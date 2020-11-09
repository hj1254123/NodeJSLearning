/**
 * 最简单的例子
 * const readline = require('readline').createInterface({
 *   input: process.stdin,
 *   output: process.stdout
 * })
 * 
 * readline.question(`你叫什么名字?`, name => {
 *   console.log(`你好 ${name}!`)
 *   readline.close()
 * })
 */
const readline = require('readline');

// 先来实现一个可交互命令行
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'search>>> '
})
rl.prompt()
rl.on('line', (line) => {
    console.log(line)
    rl.prompt()
}).on('close', () => {
    console.log('再见!')
    process.exit(0)
})