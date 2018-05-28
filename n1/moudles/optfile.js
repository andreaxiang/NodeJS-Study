var fs = require('fs'); //node js 自带的

module.exports = {
    //同步读取
    readFileSync: function (path) {
        var data = fs.readFileSync(path, 'utf-8');

        console.log(data);
        console.log('同步方法执行完毕');
    },
    //异步读取
    readFile: function (path, recall) {
        fs.readFile(path, function (err, data) {
            if(err){
                console.log(err);
            }else {
                console.log(data.toString());
                recall(data);
            }
        });
        console.log('异步方法执行完毕');
    },
    //异步写入文件
    writeFile: function (path, data, recall) {
        fs.writeFile(path, data, function (err) {
            if(err) {
                throw err;
            }
            console.log('It\'s saved!'); //文件被保存
            recall('异步写文件成功！');
        });
    },
    //同步写入文件
    writeFileSync: function (path, data) {
        fs.writeFileSync(path, data);
        console.log('同步写文件完成。')
    },

    //读取并且显示图片
    readImg: function (path, res) {
        fs.readFile(path, 'binary', function (err, filedata) {
            if(err){
                console.log(err);
                return;
            }else {
                res.write(filedata, 'binary');
                res.end();
            }
        })
    }

}