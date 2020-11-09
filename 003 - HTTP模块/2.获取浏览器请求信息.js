const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

/**
request对象,用于获取请求信息：
  request.url 客户端请求的url地址
  request.headers 客户端请求的http header
  request.method 获取请求的方式，一般有几个选项，POST,GET和DELETE等，服务器可以根据客户端的不同请求方法进行不同的处理。
  request.httpVersion http的版本
  request.trailers 存放附加的一些http头信息
  request.socket 用于监听客户端请求的socket对象
 */
/**
response对象,用于设置要返回给客户端的数据：
  writeHead(statusCode,[, StatusMessage[, headers]])：发送响应首部，包含状态码、状态信息、响应头
  write(chunk)：向响应主体中写入字符串或者 buffer
  end(chunk)：向服务器发出信号，可以携带最后发送的数据，表明已发送所有响应头和主体，每个响应都需要调用一次
  getHeader(name)：返回指定 name 的 header
  getHeaders()：返回包含了所有 header 信息的对象
  setHeader(name, value)：设置响应头，和 writeHead() 合并，有冲突时优先使用 writeHead()
  statusCode：设置响应 HTTP status

 */
// 下面是一个例子，向浏览器返回它的请求信息
const server = http.createServer((req, res) => {
  // 获取请求信息
  const { url, method, headers } = req;
  // 写入响应信息，返回给浏览器
  res.statusCode = 200
  res.setHeader('content-type', 'text/plain')
  res.write(`URL: ${url}\n`)
  res.write(`method: ${method}\n`)
  res.write(`headers: ${JSON.stringify(headers, null, '  ')}`)

  res.end('\n')
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`)
})