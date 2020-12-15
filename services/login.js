const { json } = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');
var token = require('./token')


module.exports.login = function(req, res) {
  var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password : '123456',
    database : 'open_data'
  });
    //连接数据库
 connection.connect();

const username = req.body.username;
const password = req.body.password
console.log(username,password);
connection.query(`SELECT * FROM users WHERE  username='${username}' AND password='${password}'`, function (error, results, fields) {
    if (error) throw error;
    if(results.length == 1){
      console.log('登录人：'+results[0].username);
      let tokenKey = token.en(results[0].username);
      // 将tokenkey保存到数据库中
      var connection = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password : '123456',
        database : 'open_data'
      });
      connection.query(`UPDATE users SET tokenKey='${tokenKey}' WHERE username='${username}'`, function(error, results) {
        if (error) throw error;
      })
      return res.status(200).json({
        success:200,
        message: {
			id: results[0].id,
			username: results[0].username,
			employeeName: results[0].employeeName
		},
        tokenKey
      });
    }
    res.status(200).json({
      success:0,
      message:'登录失败,账户或密码错误'
    });
  });

    //4.关闭连接
connection.end();
}

module.exports.home = function(req, res) {
  console.log(req.headers.authorization)
  const tokenKey = req.headers.authorization;
  var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password : '123456',
    database : 'open_data'
  });
    //连接数据库
 connection.connect();
 connection.query(`SELECT * FROM users WHERE  tokenKey='${tokenKey}'`, function (error, results, fields) {
	 console.log(results);
  if (error) throw error;
  if(results.length !== 0){
    if(results[0].type === 0){
      return res.status(200).json({
        success:200,
        message: [
          {
              name: '订单管理',
              lis:[{
				  name:'所有订单',
				  nav:'/order'
			  }]
          },
          {
              name: '产品管理',
              lis:[{
				  name: '所有产品',
				  nav: '/product'
			  },{
				name: '收发货',
				nav: '/shipments'
			  }]
          },
          {
              name: '财务管理',
              lis:[{
				 name:  '出库明细表',
				 nav: '/detail'
			  }]
          },
          {
              name: '用户管理',
              lis:[{
				  name:'所用用户',
				  nav:'/all'
			  },{
				  name:'个人信息',
				  nav:'/datum'
			  }]
          }
      ]
      });
    }else if(results[0].type === 1){
      return res.status(200).json({
        success:200,
        message:  [
          {
              name: '订单管理',
              lis:[{
				  name:'所有订单',
				  nav:'/order'
			  }]
          },
          {
              name: '产品管理',
              lis:[{
				  name: '所有产品',
				  nav: '/product'
			  },{
				name: '收发货',
				nav: '/shipments'
			  }]
          },
          {
              name: '财务管理',
              lis:[{
				 name:  '出库明细表',
				 nav: '/detail'
			  }]
          },
          {
              name: '信息管理',
              lis:[{
				  name:'个人信息',
				  nav:'/datum'
			  }]
          }
      ]
      });
    }else{
      return res.status(200).json({
        success:0,
        message:'获取列表失败'
      });
    }
  }
  if(results.length == 0){
    return res.status(200).json({
      success:0,
      message:'非法操作'
    });
  }
 })
     //4.关闭连接
connection.end();
}

