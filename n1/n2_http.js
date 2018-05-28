var http = require('http');
http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/html; charset = utf-8;'}); //协议头
    if(response.url!== "/favicon.ico"){ //清除第2次访问
        console.log('访问');
        response.write('Hello World');
        response.end('你好世界'); //协议尾  不写响应头内容则没有，写了会产生二次访问
    }

}).listen(8000);
console.log('Server now running at http://127.0.0.1:8000/');
