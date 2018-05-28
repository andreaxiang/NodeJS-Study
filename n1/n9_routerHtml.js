var http = require('http');
var url = require('url');
var router = require('./moudles/router');
// var optfile = require('./moudles/optfile');

http.createServer(function (request, response) {

    if(response.url!== "/favicon.ico"){ //防止二次提交

        /* 从url中获取路由信息 */
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, ''); //利用正则替换掉前面的/
        /* 通过路由字符串调用对应函数 */
        router[pathname](request,response);

    }

}).listen(8000);
console.log('Server now running at http://127.0.0.1:8000/');

