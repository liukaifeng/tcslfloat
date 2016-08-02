var path = require("path");

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
	externals:{
		"jquery":"$"
	},
  	node: {
    	"fs": "empty"
  	}
}