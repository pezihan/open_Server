var Login = require('./services/login');
var OrderForm = require('./services/orderform');
var commodity = require('./services/commodity');

//express提供了一种更好的方式 
//专门用来包装路由的
var express = require('express');

//1.创建一个路由容器
var router = express.Router();

// 登录验证
router.post('/open/login', function(req, res) {
    Login.login(req, res);
})

// 获取home也布局
router.get('/open/home', function(req, res) {
    Login.home(req, res);
})

// 获取查询订单数据
router.get('/open/order', function(req, res) {
    OrderForm.inquire(req, res);
})

// 根据id删除订单数据
router.post('/open/delete', function(req, res) {
    OrderForm.deletes(req, res);
})

//3.把router导出
module.exports = router;