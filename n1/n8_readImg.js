var http = require('http');
var optfile = require('./moudles/optfile');

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'image/jpeg'}); //注意：此时传入 协议头类型是image/jpeg

    if(response.url!== "/favicon.ico"){ //防止二次提交

        optfile.readImg('./images/avatar.jpg', response);

    }

}).listen(8000);
console.log('Server now running at http://127.0.0.1:8000/');

