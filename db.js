var mysql = require('mysql');

  //1.创建连接
var connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password : '123456',
  database : 'open_data'
});
module.exports = connection
