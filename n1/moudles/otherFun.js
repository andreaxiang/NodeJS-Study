//这种写法 支持多个函数
module.exports = {
    fun3: function(res) {
        console.log('我是fun3');
        res.write('hi，我是fun3');
    },
    fun4: function(res) {
        console.log('我是fun4');
        res.write('hi，我是fun4');
    }
}

//这种写法 仅支持导出一个函数
// function fun2(res) {
//     console.log('我是fun2');
//     res.write('hi，我是fun2');
// }
// module.exports = fun2; //仅支持导出一个函数