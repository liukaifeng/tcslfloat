var Jquery = require( "jquery" );
var fund = require( "../html/fund.html" );
var template = require('art-template');
var css = require("../assets/css/style.css");

var data = [
    {
        "systemName": "会员营销（新）",
        "iconUrl": "test",
        "systemIndex": "系统首页地址",
        "summary": "提供移动互联时代会员管理及营销功能"
    },
    {
        "systemName": "营业管理",
        "iconUrl": "test",
        "systemIndex": "test",
        "summary": "提供餐饮总部数据深度经营分析功能"
    }
];
var render = template.compile(fund);
var html = render(data);

Jquery(function(){
	Jquery("body").append("<div id='floattargetcan'></div>");
	Jquery( "#floattargetcan" ).html( html );

	//console.log( Jquery( "#floattargetcan .floatFunProductCan" ).outerHeight() );

	Jquery.ajax({
		url:"http://192.168.0.9/work/tcslfloat/data.json",
		datatype:"json",
		type:"get",
		success:function( data ){
			console.log( data );
		}
	});

	Jquery( "#floattargetcan .floatFunProductCan" ).css( 
		"top",
		-Jquery( "#floattargetcan .floatFunProductCan" ).outerHeight() - 20
	);	

	Jquery(".floatFunService").on("click",function(){
		Jquery( ".floatFunProductCan" ).fadeIn( 300 );
	});
	
});
	