/*
 * 案例二: 简单的路由功能
 * 使用: 在命令行界面中执行 node 2.js
 *       用浏览器访问 http://localhost:8080/
 *                    http://localhost:8080/xiaobei
 */
var express = require('express'); //引入express
var app = express();
app.get('/',function(request,response){
    response.send('hello everybody.');
});

app.get('/xiaobei',function(request,response){
    response.send('xiaobei.');
});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为: http://%s:%s",host,port);
});
