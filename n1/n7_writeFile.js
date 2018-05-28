var http = require('http');
//var optfile = require('./moudles/optfile');
var url = require('url');
var router = require('./moudles/router');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); //协议头
    if(response.url!== "/favicon.ico"){ //防止二次提交


        /* 从url中获取路由信息 */
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, ''); //利用正则替换掉前面的/
        /* 通过路由字符串调用对应函数 */
        router[pathname](request,response);





        //optfile.readFileSync('./view/login.html');  /*同步*/
        //异步+ 闭包回调
        // function  recall(data) {
        //     response.write(data);
        //     response.end('ok');
        // }
        // optfile.readFile('./view/login.html', recall);  /*异步*/
        // console.log('主程序执行完毕');

    }

}).listen(8000);
console.log('Server now running at http://127.0.0.1:8000/');

