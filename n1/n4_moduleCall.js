var http = require('http');

/* 2 调用其他文件内的js函数 */
// var User = require('./moudles/User/User');
// var Teacher = require('./moudles/Teacher');
var Student = require('./moudles/Student');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); //协议头
    if(response.url!== "/favicon.ico"){ //清除第2次访问

        /* 构造方法 传入参数 */
        student = new Student(1, '韩梅梅',19);
        student.enter();
        student.study(response);
        // teacher = new Teacher(1, '王阳明',50);
        // teacher.enter();
        // teacher.teach(response)

        // user = new User(1, '小明',20);

        // user = new User();
        // user.id = 1;
        // user.name = '张三';
        // user.age = 20;
        // user.enter();

        response.end(''); //协议尾  不写内容则没有输出，写了会产生二次访问
    }

}).listen(8000);
console.log('Server now running at http://127.0.0.1:8000/');
