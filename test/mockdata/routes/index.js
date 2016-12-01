var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/aa', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mockdata = {"iscanyin7login":true,
    "data": [
        {
            "accountId":"1234122",
            "systemName": "营业管理",
            "iconUrl": "image/canyin7_40.png",
            "systemIndex": "http://219.150.85.232:8078/cy7center/canyin/mng/",
            "productId": "1233",
            "loginUrl": "http://baidu.com",
            "isBinded": true,
            "summary": "提供餐饮总部数据深度经营分析功能",
            "color": "linear-gradient(45deg ,#0389d9 , #23d44a)",
            "parms": {
                "userName1": "用户名1",
                "password": "密码",
                "groupId": "集团号"
            }
        },
        {
            "accountId":"1234122",
            "systemName": "库存管理",
            "iconUrl": "image/yungyl_40.png",
            "systemIndex": "http://scmcy7.cn:8180/cldpoint/primary.do#",
            "productId": "1234",
            "loginUrl": "http://bing.com",
            "isBinded": false,
            "summary": "提供采购管理、库存管理、成本核算、菜品毛利分析以及供货商EDI平台的功能",
            "color": "linear-gradient(45deg ,#3064fa , #1dc7e6)",
            "parms": {
                "userName2": "用户名2",
                "password": "密码",
                "groupId": "集团号"
            }
        },
        {
            "accountId":"1234122",
            "systemName": "库存哈哈",
            "iconUrl": "image/yungyl_40.png",
            "systemIndex": "http://scmcy7.cn:8180/cldpoint/primary.do#",
            "productId": "1124",
            "loginUrl": "http://bing.com",
            "isBinded": false,
            "summary": "提供采购管理、库存管理、成本核算、菜品毛利分析以及供货商EDI平台的功能",
            "color": "linear-gradient(45deg ,#3064fa , #1dc7e6)",
            "parms": {
                "userName2": "用户名2",
                "password": "密码",
                "groupId": "集团号"
            }
        },
        {
            "accountId":"1234122",
            "systemName": "会员营销",
            "iconUrl": "image/crm_40.png",
            "productId": "1236",
            "loginUrl": "http://163.com",
            "isBinded": true,
            "systemIndex": "http://cs.wuuxiang.com:888/shop/",
            "summary": "提供会员管理、精准营销及分析等功能",
            "color": "linear-gradient(45deg ,#2984e4 , #d13ed4)",
            "parms": {
                "userName3": "用户名3",
                "password": "密码",
                "groupId": "集团号"
            }
        }
    ]
};

router.get('/bb',function( req,res,next ){
	// setTimeout(function(){
		res.send( JSON.stringify(mockdata) );
	// },3000);
});

router.post('/cc',function( req,res,next ){
    
    console.log( res.req.body );
    res.send({
        "code": "0",
        "message": "xxx",
        "data": {
                "systemName": "营业管理",
                "iconUrl": "test",
                "systemIndex": "http://219.150.85.232:8078/cy7center/canyin/mng/",
                "productId": "XXX",
                "accountId": "123456",
                "loginUrl": "xxxxxxxxxxxx",
                "isBinded": true,
                "summary": "提供餐饮总部数据深度经营分析功能",
                "color": "#445265",
                "parms": {
                    "userName": "用户名",
                    "password": "密码",
                    "groupId": "集团号"
                }
            }
    });
});

module.exports = router;
