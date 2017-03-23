/*
 * 案例六: 文件上传处理
 * 使用: 在命令行界面中执行 node 6.js
 *       用浏览器访问 http://localhost:8080/upload.html
 */
var express = require('express');    //引入express
var app = express();
app.use(express.static("resource")); //指定我们存放js，css，img，html等静态资源的文件目录
var bodyParser = require('body-parser'); //用于处理post请求中的body内容模块
var multer = require('multer'); //解析 multipart/form-data
app.use(bodyParser.urlencoded({extended:true})); //解析 application/x-www-form-urlencoded
app.use(multer({dest:'/upload/'}).array('image')); //指定上传目录，以及表单中的文件域名称

app.get('/upload.html',function(request,response){
    response.sendFile(__dirname+'/resource/html/upload.html');
});

//针对表单post操作处理
app.post('/file_ok',function(request,response){
    response.send(request.files);
});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为: http://%s:%s",host,port);
});
