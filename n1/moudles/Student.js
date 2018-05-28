/* 继承了User的基本属性方法 */
var User = require('./User');

/* 构造 初始化 */
function Student(id, name, age) {
    User.apply(this, [id,name,age]);
    /* 成员方法赋值res 表示可以向客户端输出 */
    this.study = function (res) {
        res.write(this.name+'同学，'+ '请不要再教室里睡觉');
    }
}
/* 模块导出 */
module.exports = Student;