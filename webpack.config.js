var path = require("path");

module.exports = {
	entry:'./index.js',
	output:{
		path:path.join( __dirname,"js" ),
		filename:"bundle.js"
	},
	module: {
	    loaders:[
	      { test: /\.html$/, exclude: /node_modules/, loader: 'string' },
	      { test:/\.css$/,loaders:['style','css'] }
	    ]
	},
	externals:{
		"jquery":"$"
	},
  	node: {
    	"fs": "empty"
  	}
}