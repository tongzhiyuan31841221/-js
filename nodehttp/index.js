// 1.引入http模块
const http = require("http")
// 2.创建server实例createServer()可以接受一个函数
/* 
    createServer((req,res)=>{})
    这个函数在接受到请求的时候执行

*/
const server = http.createServer((req, res) => {
    // setHeader设置响应头，res.setHeader('content-type', 'text/html;charset=utf-8')
    // 文本当成html，用utf-8字符集

    // https的默认端口是443
    // http 的默认端口是8080
    // 资源监视器+
    // |req.method|获取请求方法|
    // |req.url|获取请求地址，不包含协议，IP地址，端口号|    
    // |req.httpVersion|获取http的版本号|
   
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion)
    res.setHeader('content-type', 'text/html;charset=utf-8')
    res.end("http server，你好")
})
// 3.监听端口
server.listen(3000, () => {
    console.log("服务已经启动");
})
