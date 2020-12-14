var Login = require('./services/login');
var OrderForm = require('./services/orderform');
var Commodity = require('./services/commodity');
var Users = require('./services/users');
var Finance = require('./services/finance');

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

 // 添加与修改订单数据
 router.post('/open/editOrder', function(req, res) {
	 OrderForm.editOrder(req, res);
 })
 
 // 根据订单id查找订单数据
 router.get('/open/orderId', function(req, res) {
	 OrderForm.orderId(req, res)
 })
 
 // 添加订单事务内容
 router.post('/open/orderStaus', function(req, res) {
	OrderForm.orderStaus(req, res)
 })
 
 // 添加退款事务
 router.post('/open/orderReimburse', function(req, res) {
 	OrderForm.orderReimburse(req, res)
 })
 
 // 获取与查找收发货订单数据
 router.get('/open/getmanagement', function(req, res) {
 	OrderForm.getmanagement(req, res)
 })
 
 // 修改物流信息与售后状态信息
 router.post('/open/logistics', function(req, res) {
 	OrderForm.logistics(req, res)
 })
 
 // 查询商品列表
 router.get('/open/commodity', function(req, res) {
	Commodity.commodity(req, res)
 })
 
 // 获取商品列表
 router.get('/open/commoditys', function(req, res) {
 	Commodity.commoditys(req, res)
 })
 
 // 根据id删除商品数据
 router.post('/open/deleteCommod', function(req, res) {
 	Commodity.deleteCommod(req, res)
 })
 
 // 根据id查询商品数据
 router.post('/open/editCommodId', function(req, res) {
 	Commodity.editCommodId(req, res)
 })
 
 // 添加与修改商品数据
 router.post('/open/editCommodity', function(req, res) {
 	Commodity.editCommodity(req, res)
 })
 
 
 // 获取用户列表
 router.get('/open/userList', function(req, res) {
 	Users.userList(req, res)
 })
 
 // 根据id查找用户信息
 router.get('/open/userId', function(req, res) {
 	Users.userId(req, res)
 })
 
 // 修改用户密码
 router.post('/open/passwordId', function(req, res) {
 	Users.passwordId(req, res)
 })
 
  // 根据id删除用户数据
  router.post('/open/deluserId', function(req, res) {
  	Users.deluserId(req, res)
  })
  
  // 添加用户或修改用户信息
  router.post('/open/useredit', function(req, res) {
  	Users.useredit(req, res)
  })


//3.把router导出
module.exports = router;