const { json } = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var token = require('./token')

// 查询商品列表
module.exports.commodity = function(req, res) {
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

// 获取与查询商品列表
module.exports.commoditys = function(req, res) {
	const tokenKey = req.headers.authorization;
	const start = (req.query.start - 1) * req.query.limit;
	const limit = req.query.start * req.query.limit;
	const product = req.query.product
	const commodity = req.query.commodity
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
			 var str = 0
			   //连接数据库
			connection.connect();
			connection.query(`SELECT * FROM commodity WHERE product LIKE '%${product}%' AND commodity LIKE '%${commodity}%'`, function(error, results, fields) {
				if (error) throw error;
				// if (error) throw res.status(200).json({success:0,message: '查询失败'});
				str = results.length
			});
			connection.query(`SELECT * FROM commodity WHERE product LIKE '%${product}%' AND commodity LIKE '%${commodity}%' ORDER BY ID DESC LIMIT ${start},${limit}`, function(error, results, fields) {
				if (error) throw error;
				// if (error) throw res.status(200).json({success:0,message: '查询失败'});
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
	connection.end();
}

 // 根据id删除商品数据
 module.exports.deleteCommod = function(req, res) {
	const tokenKey = req.headers.authorization;
	const orderId = req.body.deleteId
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
			 connection.connect();
			 connection.query(`DELETE FROM commodity WHERE id IN (${orderId})`, function(error, results, fields) {
				 if (error) throw res.status(200).json({success:0,message: '删除失败'});
				 	// if (error) throw error;
				 	return res.status(200).json({
				 		success:200,
				 		message: '删除成功'
				 	});
				 
			 })
		}
	})
	connection.end();
 }

 // 根据id查询商品数据
module.exports.editCommodId = function(req, res) {
	const tokenKey = req.headers.authorization;
	const id = req.body.id
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
			 connection.connect();
			 connection.query(`SELECT * FROM commodity WHERE id=${id}`, function(error, results, fields) {
				 if (error) throw res.status(200).json({success:0,message: '获取商品信息失败失败'});
				 	// if (error) throw error;
				 	return res.status(200).json({
				 		success:200,
				 		message: results[0]
				 	});
			 })
		}
	})
	connection.end();
}

 // 添加与修改商品数据
 module.exports.editCommodity = function(req, res) {
	 const tokenKey = req.headers.authorization;
	 const id = req.body.id
	 const product = req.body.product
	 const univalence = req.body.univalence
	 const commodity = req.body.commodity
	 const repertory = req.body.repertory
	 const operator = req.body.operator
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
			if (id == null) { // 添加产品数据
				var connection = mysql.createConnection({
				   host:'localhost',
				   user: 'root',
				   password : '123456',
				   database : 'open_data'
				 });
				   //连接数据库
				connection.connect();
				connection.query(`INSERT INTO commodity (product,univalence,commodity,repertory,operator) VALUES ('${product}','${univalence}','${commodity}','${repertory}','${operator}')`, function(error, results, fields) {
					if (error) throw res.status(200).json({success:0,message: '操作失败'});
					return res.status(200).json({
						success:200,
						message: '添加成功'
					});
				})
			} else { // 修改产品数据
				var connection = mysql.createConnection({
				   host:'localhost',
				   user: 'root',
				   password : '123456',
				   database : 'open_data'
				});
				connection.connect();
				connection.query(`UPDATE commodity SET product='${product}',univalence='${univalence}',commodity='${commodity}',repertory='${repertory}',operator='${operator}' WHERE id=${id}`, function(error, results, fields) {
					if (error) throw res.status(200).json({success:0,message: '操作失败'});
					// if (error) throw error;
					return res.status(200).json({
						success:200,
						message: '修改成功'
					});
				})
			}
		}
	connection.end();
 })
 }