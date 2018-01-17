/**
 * Created by linwang on 2018/1/16.
 * 应用程序的启动（入口）文件
 */
var express = require('express');
var path = require('path');

//加载模板模块
var swig = require('swig');

//加载数据库模块
var mongoose = require('mongoose');

//创建app应用 => NodeJS Http.createServer();
var app = express();
//设置静态文件托管
//当用户访问的路径以/public开始，那么直接返回对应__dirname + '/public'下的文件
app.use('/public',express.static(path.join(__dirname, '/public')));



/*配置应用模板
定义当前应用使用的模板引擎
第一个参数：模板引擎名称，同时也是模板文件的后缀，
第二个参数表示用于解析处理模板内容的方法*/
app.engine('html',swig.renderFile);

/*设置模板文件存放目录，第一个参数必须是views,第二个参数是目录*/
app.set('views','./views');

//注册所使用的模板引擎，第一个参数必须是view engine,第二个参数和app.engine
//这个方法中定义的模板引擎参数是一致的
app.set('view engine', 'html');

//在开发过程中吧，需要取消模板缓存
swig.setDefaults({cache: false});

/*首页
*
* req request对象
* res response对象
* next 函数*/
/*app.get('/',function(req,res,next){
    /!*res.send('<h1>欢迎光临我的博客!</h1>')*!/
    /!*
    * duqu views目录下的制定文件，解析并返回客户端
    * 第一个参数：表示模板的文件，相对于views目录 views/index.html
    * 第二个参数：传递给模板使用的数据*!/
    res.render('index');
});*/

/*
 * 根据不同的功能划分模块*/
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/main',require('./routers/main'));

//监听http请求
mongoose.connect('mongodb://localhost:27018/blog',function(err){
    if(err){
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功');
        app.listen(8081);
    }
});
