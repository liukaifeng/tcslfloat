var Jquery = require( "jquery" );
var fund = require( "../html/fund.html" );
var template = require('art-template');
var css = require("../assets/css/style.css");

var render = template.compile(fund);
var html = "";

Jquery(function(){
	Jquery("body").append("<div id='floattargetcan'></div>");
	

	//console.log( Jquery( "#floattargetcan .floatFunProductCan" ).outerHeight() );

	window.getProductData = function( queryParams ){
		
		var realparams = Jquery.extend( {
			url:"data.json",
			datatype:"json",
			type:"get",
			success:function( data ){
				html = render(data);
				
				Jquery( "#floattargetcan" ).html( html );
			

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



				console.log( data );
			}
		},queryParams );

		Jquery.ajax( realparams );	
	}

	
	
});
	