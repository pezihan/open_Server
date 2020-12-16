# open_Server

### 介绍

open_shop 配套的服务器 API 

**前端项目地址**：https://github.com/pezihan/open_management

### 项目环境

- 本地环境

 Node.js + Express + MySQL

- 创建数据库

 数据库文件在：db -> open_data.sql

 创建数据库 mydb，可通过新建查询执行 open_data.sql下的 SQL 语句建立数据库，数据库表

**​ 数据库默认连接名：root   密码： 123456**



### 安装

```
# 克隆项目
git clone https://github.com/pezihan/open_Server.git

# 进入项目目录
cd open_Server

# 安装依赖
npm install

# 本地开发 启动项目
node app.js
```

### 目录结构说明

- `router` 统一路由
  - `api` 提供 api 接口
- `services` 服务层，业务逻辑代码在这一层编写，通过不同的接口获取的数据转换成统一的前端所需要的数据
  - commodity.js  商品数据处理文件
  - login.js  登录认证处理文件
  - orderform.js  订单数据处理文件
  - users.js   用户管理数据处理文件
  - token.js   token登录保持处理文件
- `app.js` 主项目入口文件
- `package.json` 项目配置文件
