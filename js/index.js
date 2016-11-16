var Jquery = require( "jquery" );
var fund = require( "../html/fund.html" );
var template = require('art-template');

var remodal = require('remodal/dist/remodal.min.js');
//var remodal = require('imports?$=jquery!remodal/dist/remodal.min');
var remodalcss1 = require('remodal/dist/remodal-default-theme.css');
var remodalcss2 = require('remodal/dist/remodal.css');
var css = require("../assets/css/style.css");

// var img1 = require("../assets/image/kefu_40.png");
// var canyin7 = require("../assets/image/canyin7_40.png");
// var crm = require("../assets/image/crm_40.png");
// var yungyl = require("../assets/image/yungyl_40.png");
var moreSelected = require( "../assets/image/more_40_selected.png" );
var more = require( "../assets/image/more_40.png" );

var render = template.compile(fund);
var html = "";

template.helper( "checkBind",function( value ){
	if( value.isBinded ){
		return value.color;
	}else{
		return "gray";
	}
});

template.helper( "convertStr",function( value ){
	return String( value );
});

Jquery(function(){
	Jquery("body").append("<div id='floattargetcan'></div>");
	
	//console.log( require("../assets/image/kefu_40.png") );
	//console.log( Jquery( "#floattargetcan .floatFunProductCan" ).outerHeight() );
	
	function truefalseq(a,b){
		if( a.isBinded && b.isBinded ){
			return 0;
		}else if( a.isBinded ){
			return -1
		}else if( b.isBinded ){
			return 1
		}
	}

	window.getProductData = function( queryParams,posturl ){
		
		var realparams = Jquery.extend( {
			url:"data.json",
			datatype:"json",
			type:"get",
			success:function( data ){
				var parseD;

				if( typeof( data ) == "object" ){
					parseD = data;
					data.data.sort(truefalseq);
					html = render(data);
				}else if( typeof( data ) == "string" ){
					parseD = JSON.parse( data );
					parseD.data.sort(truefalseq);
					html = render( parseD );
				}

				

				Jquery( "#floattargetcan" ).html( html );

				var inst = Jquery('form[data-remodal-id=modal]').remodal({ hashTracking:false });				

				Jquery( ".floatFunProductCellIn" ).on("click",function(){
					//填充input


					var productId = Jquery(this).attr( "productId" );
					var targetCan = Jquery( "#remodal-input" );
					var isBinded = Jquery(this).attr( "isBinded" );
					//console.log( isBinded );
					if( isBinded === "false" ){
						Jquery( ".remodal-inputcell" ).remove();;
						for( var i = 0 ; i < parseD.data.length ; i++ ){
							if( productId === parseD.data[i].productId ){
								for( var p in parseD.data[i].parms ){
									var pause = Jquery("<div class='remodal-inputcell'></div>");
									pause.append( Jquery( "<div class='remodal-left'>"+ parseD.data[i].parms[p] +"：</div>" ) );
									pause.append( Jquery( "<div class='remodal-right'><input name='"+ p +"' type='text'></div>" ) );
									targetCan.append( pause );
								}
							}
						}
						inst.open();
					}else{
						window.location.href = Jquery(this).attr( "loginUrl" );
					}
				});

				Jquery(document).on("confirmation",'.remodal',function(){
					// console.log( "confirm" );
					Jquery( ".remodal" ).attr( "action",posturl );
					Jquery(".remodal").submit();
					// Jquery.ajax({
					// 	url:"/cc",
					// 	datatype:"json",
					// 	type:"post",
					// 	data:{hello:"123"},
					// 	success:function( res ){
					// 		console.log(res);
					// 	}
					// });

				});


				// Jquery( "#base64img" ).attr("src",img1 );			

				Jquery( "#floattargetcan .floatFunProductCan" ).css( 
					"top",
					-Jquery( "#floattargetcan .floatFunProductCan" ).outerHeight() - 20
				);	

				Jquery(".floatFunService").on("click",function(){
					if( Jquery( ".floatFunProductCan" ).css("display") == "none" ){
						Jquery( ".floatFunService img" ).attr( "src",moreSelected );
						Jquery( ".floatFunProductCan" ).fadeIn( 300 );
					}else if( Jquery( ".floatFunProductCan" ).css("display") != "none" ){
						Jquery( ".floatFunService img" ).attr( "src",more );
						Jquery( ".floatFunProductCan" ).fadeOut( 300 );
					}
				});



				
			}
		},queryParams );

		Jquery.ajax( realparams );	
	}

	
	
});
	