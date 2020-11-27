// 订单处理
const { json } = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var token = require('./token')

// 获取与查询订单数据
module.exports.inquire = function(req, res) {
	const tokenKey = req.headers.authorization;
	const start = (req.query.start - 1) * req.query.limit;
	const limit = req.query.start * req.query.limit;
	const navigation = req.query.navigation;
	const employeeName = req.query.employeeName;
	const employeeID = req.query.employeeID;
	const phone = req.query.phone;
	const number = req.query.number;
	var staus = '';
	if(navigation == 1) {
		staus = '退货中'
	}else if(navigation == 2) {
		staus = '换货中'
	}else if(navigation == 3) {
		staus = '维修中'
	}else{
		staus = ''
	}
  var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password : '123456',
    database : 'open_data'
  });
    //连接数据库
 connection.connect();
 connection.query(`SELECT * FROM users WHERE  tokenKey='${tokenKey}'`, function (error, results, fields) {
	 if (error) throw error;
	 if(results.length == 0) {
		 return res.status(200).json({
		   success:0,
		   message:'非法操作'
		 });
	 }else {
		 // console.log(tokenKey,navigation,employeeName,employeeID,phone,number);
		 var connection = mysql.createConnection({
		    host:'localhost',
		    user: 'root',
		    password : '123456',
		    database : 'open_data'
		  });
		  var str = 0
		    //连接数据库  `SELECT * FROM orderform LIMIT(${start - 1})*${limit},${limit}`  
		 connection.connect();
		 connection.query(`SELECT * FROM orderform WHERE phone Like '%${phone}%' AND employeeName Like '%${employeeName}%' AND employeeID Like '%${employeeID}%' AND number Like '%${number}%' AND staus LIKE '%${staus}%'`, function(error, result, fields) {
		 			 if (error) throw res.status(200).json({success:0,message: '查询失败'});
		 			 console.log(result.length);
					 str = result.length
		 });
		 
		 connection.query(`SELECT * FROM orderform WHERE phone Like '%${phone}%' AND employeeName Like '%${employeeName}%' AND employeeID Like '%${employeeID}%' AND number Like '%${number}%' AND staus LIKE '%${staus}%' ORDER BY ID DESC LIMIT ${start},${limit}`, function(error, results, fields) {
			 if (error) throw res.status(200).json({success:0,message: '查询失败'});
			 console.log(results);
			return res.status(200).json({
				success:200,
				message: results,
				sum:str
			});
		 });
		 connection.end();
	 }
 })
 //4.关闭连接
 connection.end();
 }
 
 // 根据id数组删除订单数据
 module.exports.deletes = function(req, res) {
	const tokenKey = req.headers.authorization;
	const orderId = req.body.deleteId
	console.log(orderId);
	var connection = mysql.createConnection({
	   host:'localhost',
	   user: 'root',
	   password : '123456',
	   database : 'open_data'
	 });
	   //连接数据库
	connection.connect();
	connection.query(`SELECT * FROM users WHERE  tokenKey='${tokenKey}'`, function(error, results, fields) {
		if (error) throw error;
		if(results.length == 0) {
				 return res.status(200).json({
				   success:0,
				   message:'非法操作'
				 });
		}else {
			var connection = mysql.createConnection({
			   host:'localhost',
			   user: 'root',
			   password : '123456',
			   database : 'open_data'
			 });
			 connection.connect();
			 connection.query(`DELETE FROM orderform WHERE id IN (${orderId})`, function(error, results, fields) {
				// if (error) throw res.status(200).json({success:0,message: '删除失败'});
				if (error) throw error;
				return res.status(200).json({
					success:200,
					message: '删除成功'
				});
			 })
		}
	});
	connection.end();
 }
 