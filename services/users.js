const { json } = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var token = require('./token')
 
 //获取与查询用户列表
 module.exports.userList = function(req, res) {
	 const tokenKey = req.headers.authorization;
	 const start = (req.query.start - 1) * req.query.limit;
	 const limit = req.query.start * req.query.limit;
	 const employeeName = req.query.employeeName;
	 const employeeID = req.query.employeeID;
	 var connection = mysql.createConnection({
	    host:'localhost',
	    user: 'root',
	    password : '123456',
	    database : 'open_data'
	  });
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
			  connection.connect();
			  connection.query(`SELECT * FROM users WHERE employeeName LIKE '%${employeeName}%' AND employeeID LIKE '%${employeeID}%'`, function(error, results, fields) {
			  	if (error) throw error;
			  	// if (error) throw res.status(200).json({success:0,message: '查询失败'});
			  	str = results.length
			  });
			  connection.query(`SELECT * FROM users WHERE employeeName LIKE '%${employeeName}%' AND employeeID LIKE '%${employeeID}%' ORDER BY ID DESC LIMIT ${start},${limit}`, function(error, results, fields) {
			  	if (error) throw error;
			  	// if (error) throw res.status(200).json({success:0,message: '查询失败'});
			  	console.log(results);
			  	return res.status(200).json({
			  		success:200,
			  		message: results,
			  		sum:str
			  	});
			  });
		 }
	  })
	  connection.end();
 }
 
 // 根据id查找用户信息
module.exports.userId = function(req, res) {
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
			 connection.connect();
			 connection.query(`SELECT * FROM users WHERE id=${id}`, function(error, results, fields) {
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

 // 修改用户密码
 module.exports.passwordId = function(req, res) {
	 const tokenKey = req.headers.authorization;
	 const id = req.body.id
	 const former=  req.body.former
	 const newPass1 = req.body.newPass1
	 const newPass2 = req.body.newPass2
	 if (newPass1 !== newPass2) {
		 return res.status(200).json({
		   success:0,
		   message:'密码修改失败'
		 });
	 }
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
			  connection.query(`SELECT password FROM users WHERE id=${id}`, function(error, results, fields) {
				  if (error) throw res.status(200).json({success:0,message: '没有此用户'});
				  if (former !== results[0].password) {
					return res.status(200).json({
					  success:0,
					  message:'原密码输入错误'
					});
				  } else {
					 var connection = mysql.createConnection({
					    host:'localhost',
					    user: 'root',
					    password : '123456',
					    database : 'open_data'
					  });
					  connection.connect();
					  connection.query(`UPDATE users SET password='${newPass1}' WHERE id=${id}`, function(error, results, fields) {
						  if (error) throw res.status(200).json({success:0,message: '修改密码失败'});
						  return res.status(200).json({
						    success:200,
						    message:'修改成功'
						  });
					  })
				  }
			  })
		 }
	 })
	 connection.end();
 }
 
  // 根据id删除用户数据
  module.exports.deluserId = function(req, res) {
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
  			 connection.query(`DELETE FROM users WHERE id IN (${id})`, function(error, results, fields) {
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
  
   module.exports.useredit = function(req, res) {
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
			   console.log(req.body);
		   }
	   })
	   connection.end();
   }