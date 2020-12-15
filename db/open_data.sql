/*
 Navicat MySQL Data Transfer

 Source Server         : pezihan
 Source Server Type    : MySQL
 Source Server Version : 50150
 Source Host           : localhost:3306
 Source Schema         : open_data

 Target Server Type    : MySQL
 Target Server Version : 50150
 File Encoding         : 65001

 Date: 15/12/2020 22:32:08
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity`  (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `product` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品编号',
  `univalence` int(20) NULL DEFAULT NULL COMMENT '单价',
  `commodity` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  `repertory` int(50) NULL DEFAULT NULL COMMENT '存库',
  `operator` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '操作人',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 29 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of commodity
-- ----------------------------
INSERT INTO `commodity` VALUES (1, 'WP00001', 320, '微波炉 H2  白色', 200, '张三');
INSERT INTO `commodity` VALUES (2, 'WP00002', 320, '微波炉 H2  黑色', 195, '王五');
INSERT INTO `commodity` VALUES (3, 'WP00003', 240, '微波炉 THG2 白色', 23, '王五');
INSERT INTO `commodity` VALUES (4, 'WP00004', 2400, '变频空调 HTC22 白色', 140, '王五');
INSERT INTO `commodity` VALUES (5, 'WP00005', 1800, '美的空调 白色', 240, '王五');
INSERT INTO `commodity` VALUES (6, 'WP00006', 180, '小霸王电风扇 GT版 白色', 290, '王五');
INSERT INTO `commodity` VALUES (7, 'WP00007', 180, '小霸王电风扇 GT版 黑色', 190, '王五');
INSERT INTO `commodity` VALUES (8, 'WP00008', 240, '红双喜电风扇 黑色', 300, '王五');
INSERT INTO `commodity` VALUES (9, 'WP00009', 270, '美的空调扇 白色', 200, '王五');
INSERT INTO `commodity` VALUES (10, 'WP00010', 270, '美的空调扇 黑色', 180, '王五');
INSERT INTO `commodity` VALUES (11, 'WP00011', 2100, '美的电冰箱 H2 白色', 176, '王五');
INSERT INTO `commodity` VALUES (12, 'WP00012', 2100, '美的电冰箱 H2 灰色', 230, '王五');
INSERT INTO `commodity` VALUES (13, 'WP00013', 180, '美的电冰箱 H2 白灰色', 500, '王五');
INSERT INTO `commodity` VALUES (14, 'WP00014', 270, '电磁炉 黑色', 202, '王五');
INSERT INTO `commodity` VALUES (15, 'WP00015', 1800, 'HTC电视机 32寸 白色', 180, '王五');
INSERT INTO `commodity` VALUES (16, 'WP00016', 1800, 'HTC电视机 32寸 黑色', 205, '王五');
INSERT INTO `commodity` VALUES (17, 'WP00017', 4800, 'HTC电视机 55寸 黑色', 120, '王五');
INSERT INTO `commodity` VALUES (18, 'WP00018', 4500, '小米AI电视机 55寸 黑色', 200, '王五');
INSERT INTO `commodity` VALUES (19, 'WP00019', 1980, '康泰油烟机', 180, '王五');
INSERT INTO `commodity` VALUES (20, 'WP00020', 1580, '变频热水器 F50 白色', 270, '王五');
INSERT INTO `commodity` VALUES (21, 'WP00021', 1190, '美的洗衣机 MGX20W', 32, '王五');
INSERT INTO `commodity` VALUES (22, 'WP00022', 1190, '美的洗衣机 MGX25G', 43, '王五');

-- ----------------------------
-- Table structure for orderform
-- ----------------------------
DROP TABLE IF EXISTS `orderform`;
CREATE TABLE `orderform`  (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `employeeName` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `employeeID` int(30) NULL DEFAULT NULL COMMENT '订单编号',
  `commodityId` int(30) NULL DEFAULT NULL COMMENT '商品id',
  `commodity` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品名称',
  `amount` int(30) NULL DEFAULT NULL COMMENT '数量',
  `sum` double NULL DEFAULT NULL COMMENT '总价',
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '地址',
  `phone` int(20) NULL DEFAULT NULL COMMENT '电话',
  `number` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '原始物流单号',
  `time` int(20) NULL DEFAULT NULL COMMENT '创建时间',
  `staus` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '状态',
  `operator` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '订单操作人',
  `maintain` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '维修记录',
  `exchange` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '换货记录',
  `returns` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '退货记录',
  `cangku` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '仓库操作人',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  INDEX `id_2`(`id`) USING BTREE,
  INDEX `id_3`(`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12324 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderform
-- ----------------------------
INSERT INTO `orderform` VALUES (1, '刘连中', 840653515, 1, '微波炉 H2  白色', 2, 640, '湖南省长沙市长沙县路 16号 海天城小区 58号楼 99单元 48室', 2147483647, '未发货', 1606461192, '进行中', '张三', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (2, '潘毕延　', 726799952, 2, '微波炉 H2  黑色', 1, 320, '湖南省长沙市长沙县路 50号 唯一星城小区 94号楼 99单元 27室', 2147483647, '未发货', 1606461192, '进行中', '张三', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (3, '于频霆', 745649191, 5, '美的空调 白色', 1, 1800, '湖南省长沙市岳麓区路 76号 蔚蓝海岸小区 24号楼 99单元 39室', 2147483647, '未发货', 1606461192, '进行中', '张三', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (4, '杨广庚', 235856070, 9, '美的空调扇 白色', 2, 540, '湖南省长沙市岳麓区路 91号 蔚蓝海岸小区 51号楼 99单元 03室', 2147483647, '未发货', 1606461192, '进行中', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (5, '凌　健', 566853845, 11, '美的电冰箱 H2 白色', 1, 2100, '湖南省怀化市贝铰路 13号 墓小区 20号楼 7单元 420室', 2147483647, '未发货', 1606461192, '进行中', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (6, '丁越楚', 270769197, 12, '美的电冰箱 H2 灰色', 4, 8400, '湖南省长沙市长沙县路 88号 唯一星城小区 84号楼 99单元 38室', 2147483647, '87570041399', 1606461192, '退货中', '李四', '无记录', '无记录', '退回单号：757656676', '张浩');
INSERT INTO `orderform` VALUES (7, '路蔚丘', 617190381, 7, '过滤水龙头 银色', 4, 720, '广东省深圳市咆谜路 07号 俗小区 88号楼 7单元 475室', 2147483647, '81727221222', 1606461192, '换货中', '李四', '无记录', '寄回单号：5467675677', '无记录', '张浩');
INSERT INTO `orderform` VALUES (8, '凌　埂', 455348814, 14, '电磁炉 黑色', 1, 270, '湖南省岳阳市闯蟹路 17号 绽小区 16号楼 9单元 792室', 2147483647, '未发货', 1606461192, '进行中', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (9, '汤恒东', 470641753, 14, '电磁炉 黑色', 1, 270, '广东省深圳市琴事路 11号 构小区 69号楼 8单元 566室', 2147483647, '未发货', 1606461192, '进行中', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (10, '龙　偌', 840748927, 14, '电磁炉 黑色', 1, 270, '广东省中山市治堪路 12号 暗小区 78号楼 8单元 209室', 2147483647, '83659461030', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (11, '卫振釜', 634558315, 15, 'HTC电视机 32寸 白色', 1, 1800, '浙江省宁波市肿闲路 13号 胖小区 43号楼 8单元 335室', 2147483647, '23213233123', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (12, '梁耿宪　', 846071620, 15, 'HTC电视机 32寸 白色', 1, 1800, '广东省中山市彰览路 06号 咎小区 47号楼 7单元 549室', 2147483647, '23243432424', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (13, '古夷丁', 286658551, 16, 'HTC电视机 32寸 黑色', 1, 1800, '广东省深圳市搜犯路 17号 寐小区 56号楼 7单元 386室', 2147483647, '44640620527', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (14, '钟简腾', 818801286, 17, 'HTC电视机 55寸 黑色', 1, 4800, '浙江省绍兴市沧赜路 08号 壬小区 89号楼 5单元 173室', 2147483647, '36356435434', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (15, '罗笛会', 699258144, 18, '小米AI电视机 55寸 黑色', 2, 9000, '上海市杨浦区繁汛路 10号 细小区 39号楼 2单元 184室', 2147483647, '42514937514', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (16, '谢澄祈', 393293197, 19, '康泰油烟机', 1, 1980, '上海市杨浦区壕图路 10号 美小区 25号楼 1单元 881室', 2147483647, '42352463564', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (17, '何辉衷', 309211598, 4, '变频空调 HTC22 白色', 1, 2400, '上海市杨浦区脖氖路 10号 坡小区 34号楼 2单元 344室', 2147483647, '29357034890', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (18, '范申宜', 346040562, 19, '康泰油烟机', 1, 1980, '云南省大理市靥且路 18号 挖小区 29号楼 2单元 833室', 2147483647, '57950520055', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (19, '尤　林', 266473325, 4, '变频空调 HTC22 白色', 1, 2400, '云南省大理市勇颐路 12号 桌小区 55号楼 9单元 558室', 2147483647, '32321980637', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (20, '孙麦灏', 860059866, 19, '康泰油烟机', 1, 1980, '湖南省长沙市岳麓区路 08号 唯一星城小区 30号楼 99单元 33室', 2147483647, '46855656023', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (21, '卢壮隐　', 634695139, 21, '美的洗衣机 MGX20W', 1, 1190, '湖南省长沙市岳麓区路 99号 唯一星城小区 68号楼 99单元 45室', 2147483647, '67132306841', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (22, '辛经章', 644691469, 21, '美的洗衣机 MGX20W', 1, 1190, '四川省成都市灿讲路 18号 费小区 27号楼 7单元 176室', 2147483647, '37481303981', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (23, '邱蒙汇', 668816219, 8, '红双喜电风扇 黑色', 2, 480, '四川省成都市狭导路 08号 穆小区 56号楼 7单元 746室', 2147483647, '81116921972', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (24, '林兆臣', 679392331, 22, '美的洗衣机 MGX25G', 1, 1190, '重庆市壮泄路 04号 沃小区 96号楼 4单元 183室', 2147483647, '74378422640', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (25, '严显伟　', 529975068, 14, '电磁炉 黑色', 10, 2700, '重庆市芽纬路 10号 嚼小区 41号楼 6单元 518室', 2147483647, '84346695062', 1606461192, '维修中', '李四', '寄回单号:453453433454', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (26, '郎　牡', 566411108, 20, '变频热水器 F50 白色', 1, 1580, '北京市九心路 06号 孔小区 97号楼 6单元 698室', 2147483647, '46768147861', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (27, '吴　宇', 688229542, 20, '变频热水器 F50 白色', 1, 1580, '湖南省长沙市岳麓区路 76号 华诚地产小区 86号楼 99单元 26室', 2147483647, '63475506492', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (28, '陈信谦', 544569191, 20, '变频热水器 F50 白色', 1, 1580, '湖南省长沙市浏阳市路 02号 蔚蓝海岸小区 07号楼 99单元 43室', 2147483647, '37640358981', 1606461192, '维修中', '李四', '寄回单号：54565675765', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (29, '夏　然', 243312852, 18, '小米AI电视机 55寸 黑色', 1, 4500, '湖南省怀化市趾恃路 17号 慰小区 51号楼 2单元 568室', 2147483647, '38053269620', 1606461192, '已完成', '李四', '无记录', '无记录', '无记录', '张浩');
INSERT INTO `orderform` VALUES (30, '赵映皆', 784264269, 18, '小米AI电视机 55寸 黑色', 2, 9000, '湖南省岳阳市就朔路 09号 丶小区 12号楼 2单元 302室', 2147483647, '55109194896', 1606461192, '换货中', '李四', '无记录', '无理由换货 寄回运单号：789237783434346 2020-12-7 22:50:7', '无记录', '张浩');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `employeeName` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `sex` int(1) NULL DEFAULT NULL COMMENT '性别',
  `address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '住址',
  `birthday` int(20) NULL DEFAULT NULL COMMENT '出生日期',
  `department` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '所在部门',
  `job` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '岗位',
  `employeeID` int(20) NULL DEFAULT NULL COMMENT '员工编号',
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '账号名',
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  `type` int(1) NULL DEFAULT NULL COMMENT '账号类型',
  `openr` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '操作人',
  `tokenKey` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '验证',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '张三', 0, '湖南省长沙市雨花区', 658886400, '市场部', '经理', 66666, 'admin', 'admin', 0, '张三', 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4.xYcfPLwibfS0NFlbMaC1gyYuhzM2vbRErSPXhcMNdvM');
INSERT INTO `users` VALUES (2, '梓涵', 1, '长沙芙蓉区海天城', 898617600, '客服部', '客服', 1, 'kefu', '123456', 1, '张三', 'eyJhbGciOiJIUzI1NiJ9.a2VmdQ.uoJrMINWNtpCdG5mtZzoiLUZTOZUgIoGVppUFBAsKL8');
INSERT INTO `users` VALUES (3, '程刚', 0, '长沙天心区唯一星城', 955123200, '市场部', '设计师', 2, 'cangku', '123456', 1, '张三', 'eyJhbGciOiJIUzI1NiJ9.Y2FuZ2t1.O6qlCpTSJlBfyFwI6SUrmE3FNTNf5YdubBsoDcSypn0');

SET FOREIGN_KEY_CHECKS = 1;
