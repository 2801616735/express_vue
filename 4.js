/*
 * 案例四: 利用GET方法进行表单提交
 * 使用: 在命令行界面中执行 node 4.js
 *       用浏览器访问 http://localhost:8080/get.html
 */
var express = require('express');    //引入express
var app = express();
app.use(express.static("resource")); //指定我们存放js，css，img，html等静态资源的文件目录

app.get('/get.html',function(request,response){
    response.sendFile(__dirname+'/resource/html/get.html');
});

//针对表单get操作处理
app.get('/get_ok',function(request,response){
    var param = {
        'name' : request.query.name
    };
    response.end(JSON.stringify(param));
});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为: http://%s:%s",host,port);
});
