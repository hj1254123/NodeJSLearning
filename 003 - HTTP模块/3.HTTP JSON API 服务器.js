
/**
# JSON API

接口一：根据ISO格式时间返回如下时、分、秒对象。

- 浏览器请求url：/api/parsetime?iso=2017-04-05T12:10:15.474Z
- 服务器返回：
    {
        "hour":21,
        "minute":45,
        "second":30
    }

接口二：根据ISO格式时间返回Unix时间戳

- 浏览器：/api/unixtime?iso=2017-04-05T12:10:15.474Z
- 服务器返回： { "unixtime": 1376136615474 }
*/

const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const parsetime = (time) => {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}
const unixtime = (time) => {
    return { unixtime: time.getTime() }
}

const server = http.createServer((req, res) => {
    let { url, headers } = req
    let host = headers.host
    // 实例化URL，用于操作url
    let myURL = new URL(url, 'http://' + host)
    // 用户请求的路径
    let pathname = myURL.pathname
    // 实例化Date，用于处理时间
    let time = new Date(myURL.searchParams.get('iso'))
    // 待返回的数据
    let result

    if(pathname === '/') {
        result = parsetime(new Date())
    } else if(pathname === '/api/parsetime') {
        result = parsetime(time)
    } else if(pathname === '/api/unixtime') {
        result = unixtime(time)
    }

    if(result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})


server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`)
})