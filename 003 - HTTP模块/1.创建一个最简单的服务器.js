const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain') //writeHead，200表示页面正常，text/plain表示是文字。
    res.end('Hello World\n') // end 完成写入
})

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`)
})