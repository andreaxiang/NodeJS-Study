var optfile = require('../moudles/optfile')

function getRecall(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    function recall(data) {
        res.write(data);
        res.end('');
    }
    return recall;
}

//这种写法 支持多个函数
module.exports = {
    login: function(req, res) {
        recall = getRecall(req, res);
        // function recall(data) {
        //     res.write(data);
        //     res.end('');
        // }
        optfile.readFile('./view/login.html', recall);
    },
    signUp: function(req, res) {
        function recall(data) {
            res.write(data);
            res.end('');
        }
        optfile.readFile('./view/signUp.html', recall);
    },
    writeFile: function (req, res) {
        function recall(data) {
            res.write(data);
            res.end('');
        }
        //optfile.writeFile('./view/one.txt', '今天阳光灿烂，处处好风光', recall);
        optfile.writeFile('./view/two.txt', '小燕子穿花衣，年年春天到这里，我问燕子你从哪里来？燕子说，我从春天走来。', recall);
    },
    //实现图片+文字的展示
    showImg: function (req, res) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        optfile.readImg('./images/avatar.jpg', res);
    }
}