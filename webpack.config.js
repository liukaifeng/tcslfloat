var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry:'./js/index.js',
	output:{
		path: __dirname,
		filename:"./test/mockdata/public/bundle.js"
	},
	module: {
	    loaders:[
	      { test: /\.html$/, exclude: /node_modules/, loader: 'string' },
	      { test:/\.css$/,loaders:['style','css'] },
	      { test: /\.(png|jpg)$/, loader: 'url-loader'}
	    ]
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false
			}
		})
	],
	externals:{
		"jquery":"$"
	},
  	node: {
    	"fs": "empty"
  	}
 //  	,
 //  	plugins: [
	//     new webpack.ProvidePlugin({
	//         $: "jquery",
	//         jQuery: "jquery",
	//         "window.jQuery": "jquery"
	//     }),
	//      new webpack.optimize.CommonsChunkPlugin('vendor', './test/mockdata/public/vendor.js')//这是第三方库打包生成的文件
	// ]
}