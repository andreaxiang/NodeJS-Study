/* 构造方法 传入参数 */
function User(id,name,age) {
    /* 构造 赋值 */
    this.id = id;
    this.name = name;
    this.age = age;
    /* 成员方法 没有赋值*/
    this.enter = function () {
        console.log(this.name+'进入图书馆'+','+'并且登记了年龄：'+this.age);
    }
}
// function User() {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.enter = function () {
//         console.log(this.name+'进入图书馆');
//     }
// }
/* 模块导出 */
module.exports = User;