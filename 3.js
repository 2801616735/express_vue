/*
 * 案例三: 访问静态文件
 * 使用: 在命令行界面中执行 node 3.js
 *       用浏览器访问 http://localhost:8080/
 *                    http://localhost:8080/img/oktu.png
 *                    http://localhost:8080/js/vue.min.js
 */
var express = require('express');    //引入express
var app = express();
app.use(express.static("resource")); //指定我们存放js，css，img，html等静态资源的文件目录

app.get('/',function(request,response){
    response.send('hello everybody.');
});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为: http://%s:%s",host,port);
});
