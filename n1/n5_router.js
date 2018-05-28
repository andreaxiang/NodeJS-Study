var http = require('http');
var url = require('url'); //nodejs 自带的
var router = require('./moudles/router');


http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); //协议头
    if(response.url!== "/favicon.ico"){ //防止二次提交

        /* 从url中获取路由信息 */
        var pathname = url.parse(request.url).pathname;
        //console.log(pathname);

        pathname = pathname.replace(/\//, ''); //利用正则替换掉前面的/
        //console.log(pathname);

        /* 通过路由字符串调用对应函数 */
        router[pathname](request,response);

        response.end(''); //协议尾  不写内容则没有输出，写了会产生二次访问
    }

}).listen(8000);
console.log('Server now running at http://127.0.0.1:8000/');