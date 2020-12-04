const { json } = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var token = require('./token')

// 获取商品列表
module.exports.commoditys = function(req, res) {
	const tokenKey = req.headers.authorization;
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
		} else {
			var connection = mysql.createConnection({
			   host:'localhost',
			   user: 'root',
			   password : '123456',
			   database : 'open_data'
			 });
			   //连接数据库
			connection.connect();
			connection.query(`SELECT * FROM commodity`, function(error, results, fields) {
				if (error) throw res.status(200).json({success:0,message: '获取商品列表失败'});
				return res.status(200).json({
				  success:200,
				  message:results
				});
			})
		}
	})
	connection.end();
}