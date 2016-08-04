var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry:'./js/index.js',
	output:{
		path: __dirname,
		filename:"bundle.js"
	},
	module: {
	    loaders:[
	      { test: /\.html$/, exclude: /node_modules/, loader: 'string' },
	      { test:/\.css$/,loaders:['style','css'] }
	    ]
	},
	// plugins:[
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		compress:{
	// 			warnings:false
	// 		}
	// 	})
	// ],
	externals:{
		"jquery":"$"
	},
  	node: {
    	"fs": "empty"
  	}
}