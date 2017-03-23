/*
 * 案例七: jquery+vue实现与后端数据交互
 * 使用: 在命令行界面中执行 node 7.js
 *       用浏览器访问 http://localhost:8080/vue.html
 */
var express = require('express');    //引入express
var app = express();
app.use(express.static("resource")); //指定我们存放js，css，img，html等静态资源的文件目录
var bodyParser = require('body-parser'); //用于处理post请求中的body内容模块
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/vue2.html',function(request,response){
    response.sendFile(__dirname+'/resource/html/vue2.html');
});

//针对表单get操作处理
app.get('/get',function(request,response){
    console.log(request.query);
    var param = {
        'name' : request.query.name
    };
    //response.send('xiaobei');
    //response.end(JSON.stringify(param));
	response.json(param);
});

app.post('/post',function(request,response){
    console.log(request.body);
    var param = {
        'name' : request.body.name
    };
    //response.end(JSON.stringify(param));
	response.json(param);
});
var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("访问地址为: http://%s:%s",host,port);
});
