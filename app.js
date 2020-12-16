var express = require('express');

var cors = require('cors') // 运行服务器跨域插件

var router = require('./router')

var bodyParser = require('body-parser');

var app =  express();

app.use(cors()) // 挂载跨域插件

//配置模板引擎和body-parser一定要在挂在路由之间
//配置body-parser 中间件 (插件，专门用来解析表单POST请求体)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//把路由容器挂载到app服务中
app.use(router); 

app.listen(4000,function(){
    console.log('running 4000....') 
})