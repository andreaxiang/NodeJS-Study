# NodeJS-Study
Node JS
概念：编写高性能网络服务器的javascript工具包（用js开发服务端程序）
单线程/ 异步/ 事件驱动
特点：处理速度快，但消耗内存多

node.js VS php
优点：性能高（运行机制问题），开发效率高（省不少优化的事），应用范围广（可以开发桌面系统，electron框架）

缺点：新/会的人少（招人使用成本高），中间件少，IDE不完善

node.js的劣势和解决方案：
1. 默认不支持多核，但用cluster可以解决
2.默认不支持服务器集群,node-http-proxy可以解决
3.使用nginx做负载均衡，静态的由nginx处理，动态的由node.js处理
4.forever或node-cluster实现灾难恢复

框架选择：
比较热门的：express/koa/Hapi以及express基础之上的sails
Express: 使用人多 完善 稳定 文档全 社区大
koa：超前 使用es6开发 正在完善中
hapi: 复杂 适合超大型项目

Node.js 学习路径：
1. node.js基础
2. Express框架
3. sails框架
4. 做项目
5. sails + vue.js
6. sails + react

学习方法： 多看文档，摸索测试




