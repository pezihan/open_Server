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
 
 // 添加与修改订单数据
module.exports.editOrder = function(req, res) {
	const tokenKey = req.headers.authorization;
	const id = req.body.id
	const employeeID = req.body.employeeID
	const employeeName = req.body.employeeName
	const phone = req.body.phone
	const address = req.body.address
	const commodity = req.body.commodity
	const commodityId = req.body.commodityId
	const amount = req.body.amount
	// const univalence = req.body.univalence 单价
	var sum = req.body.univalence * req.body.amount
	const operator = req.body.operator
	const number = '未发货'// 物流默认未发货
	const time = parseInt(new Date().getTime() / 1000);// 创建时间戳
	const staus = '进行中' // 状态
	const maintain = '无记录' // 维修
	const exchange = '无记录' // 换货
	const returns = '无记录' // 退货
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
			message:'非法操作'});
		} else {
			if(id == null) { // 添加订单
				var connection = mysql.createConnection({
				   host:'localhost',
				   user: 'root',
				   password : '123456',
				   database : 'open_data'
				});
				connection.connect();
				connection.query(`INSERT INTO orderform (employeeID,employeeName,phone,address,commodity,commodityId,amount,sum,operator,number,time,staus,maintain,exchange,returns) VALUES ('${employeeID}','${employeeName}',${phone},'${address}','${commodity}','${commodityId}',${amount},${sum},'${operator}','${number}',${time},'${staus}','${maintain}','${exchange}','${returns}')`, function(error, results, fields) {
					if (error) throw res.status(200).json({success:0,message: '操作失败'});
					return res.status(200).json({
						success:200,
						message: '添加成功'
					});
				})
			} else { // 修改订单
				if(req.body.univalence == null) {
					sum = req.body.sum
				}
				var connection = mysql.createConnection({
				   host:'localhost',
				   user: 'root',
				   password : '123456',
				   database : 'open_data'
				});
				connection.connect();
				connection.query(`UPDATE orderform SET employeeID='${employeeID}',employeeName='${employeeName}',phone=${phone},address='${address}',commodity='${commodity}',commodityId='${commodityId}',amount=${amount},sum=${sum},operator='${operator}' WHERE id=${id}`, function(error, results, fields) {
					if (error) throw res.status(200).json({success:0,message: '操作失败'});
					// if (error) throw error;
					return res.status(200).json({
						success:200,
						message: '修改成功'
					});
				})
			}
		}
	})
	connection.end();
	}
	
// 根据订单id查找订单信息数据
 module.exports.orderId = function(req, res) {
	const tokenKey = req.headers.authorization;
	const id = req.query.id
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
			connection.query(`SELECT * FROM orderform WHERE id=${id}`, function(error, results, fields) {
				// if (error) throw res.status(200).json({success:0,message: '获取此订单失败'});
				if (error) throw error
				return res.status(200).json({
				  success:200,
				  message:results
				});
			})
		}
	})
	connection.end();
 }