/*
 * 案例五: 利用POST方法进行表单提交
 * 使用: 在命令行界面中执行 node 5.js
 *       用浏览器访问 http://localhost:8080/post.html
 */
var express = require('express');    //引入express
var app = express();
app.use(express.static("resource")); //指定我们存放js，css，img，html等静态资源的文件目录
var bodyParser = require('body-parser'); //用于处理post请求中的body内容模块
app.use(bodyParser.urlencoded({ extended:false}));

app.get('/post.html',function(request,response){
    response.sendFile(__dirname+'/resource/html/post.html');
});

//针对表单post操作处理
app.post('/post_ok',function(request,response){
    var param = {
        'name' : request.body.name
    };
    response.send(JSON.stringify(param));
});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为: http://%s:%s",host,port);
});
