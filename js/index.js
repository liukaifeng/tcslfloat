var Jquery = require( "jquery" );
var fund = require( "../html/fund.html" );
var template = require('art-template');
var css = require("../assets/css/style.css");

// var img1 = require("../assets/image/kefu_40.png");
// var canyin7 = require("../assets/image/canyin7_40.png");
// var crm = require("../assets/image/crm_40.png");
// var yungyl = require("../assets/image/yungyl_40.png");


var render = template.compile(fund);
var html = "";

Jquery(function(){
	Jquery("body").append("<div id='floattargetcan'></div>");
	
	//console.log( require("../assets/image/kefu_40.png") );
	//console.log( Jquery( "#floattargetcan .floatFunProductCan" ).outerHeight() );
	

	window.getProductData = function( queryParams ){
		
		var realparams = Jquery.extend( {
			url:"data.json",
			datatype:"json",
			type:"get",
			success:function( data ){

				if( typeof( data ) == "object" ){
					html = render(data);
				}else if( typeof( data ) == "string" ){
					html = render( JSON.parse( data ) );
				}

				
				
				Jquery( "#floattargetcan" ).html( html );

				// Jquery( "#base64img" ).attr("src",img1 );			

				Jquery( "#floattargetcan .floatFunProductCan" ).css( 
					"top",
					-Jquery( "#floattargetcan .floatFunProductCan" ).outerHeight() - 20
				);	

				Jquery(".floatFunService").on("click",function(){
					if( Jquery( ".floatFunProductCan" ).css("display") == "none" ){
						Jquery( ".floatFunProductCan" ).fadeIn( 300 );
					}else if( Jquery( ".floatFunProductCan" ).css("display") != "none" ){
						Jquery( ".floatFunProductCan" ).fadeOut( 300 );
					}
				});



				
			}
		},queryParams );

		Jquery.ajax( realparams );	
	}

	
	
});
	