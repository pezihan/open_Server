var Login = require('./services/login');
var OrderForm = require('./services/orderform');
var commodity = require('./services/commodity');

//express提供了一种更好的方式 
//专门用来包装路由的
var express = require('express');

//1.创建一个路由容器
var router = express.Router();

router.post('/login', function(req, res) {
    Login.login(req, res);
})

router.get('/home', function(req, res) {
    Login.home(req, res);
})

//3.把router导出
module.exports = router;