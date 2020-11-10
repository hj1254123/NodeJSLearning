// Nodejs可以作为客户端向其他服务器请求数据，这意味着可以写爬虫。
// 使用：http.request(options, callback) 
// 或者：http.get(options[, callback])

// 下面以请求'www.example.com'为例
const http = require('http')
let options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/',
    method: 'GET'
}

const req = http.request(options, (res) => {
    // 响应的状态码
    console.log(`STATUS: ${res.statusCode}`)
    // 响应头
    console.log(`HEADERS: ${JSON.stringify(res.headers, null, 4)}`)
    // 设置编码
    res.setEncoding('utf8')

    res.on('data', (d) => { 
        console.log(`主体: ${d}`)
    })
})

req.end() // end方法结束请求