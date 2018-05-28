var http = require('http');

/* 2 调用其他文件内的js函数 */
var otherfun = require('./moudles/otherFun.js');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); //协议头
    if(response.url!== "/favicon.ico"){ //清除第2次访问
        /* 用字符串调用对应的函数  */
        funname = 'fun3';
        otherfun[funname](response);
        // otherfun['fun3'](response);
        // otherfun['fun4'](response);

        /* 用 点 语法调用对应的函数 */
        // otherfun.fun3(response);
        // otherfun.fun4(response);
        // otherfun(response);

        // fun1(response);
        response.end(''); //协议尾  不写内容则没有输出，写了会产生二次访问
    }

}).listen(8000);
console.log('Server now running at http://127.0.0.1:8000/');

/* 1 调用本地JS文件内的函数 */
function fun1(res){
    res.write('hello,我是fun1');
    console.log('fun1');
}



