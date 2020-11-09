/**
接口一：
浏览器请求url：/api/parsetime?iso=2017-04-05T12:10:15.474Z
服务器返回：
 {
  "hour":21,
  "minute":45,
  "second":30
}

接口二：
浏览器：/api/unixtime?iso=2017-04-05T12:10:15.474Z
服务器返回： { "unixtime": 1376136615474 }
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


const server = http.createServer((req, res) => {
    let { url, headers } = req
    // let host = headers.host
    // let myURL = new URL(url, host)
    // let pathname = myURL.pathname
    let result

    if(url === '/') {
        result = parsetime(new Date())
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