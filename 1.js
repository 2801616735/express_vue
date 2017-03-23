/*
 * 案例一: 利用express启动web服务
 * 使用: 在命令行界面中执行 node 1.js
 *       用浏览器访问 http://localhost:8080/
 */
var express = require('express'); //引入express
var app = express();
app.get('/',function(request,response){
    response.send('hello everybody.');
});

//监听本机器的8080端口
var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为: http://%s:%s",host,port);
});
