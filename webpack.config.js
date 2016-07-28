var path = require("path");

module.exports = {
	entry:'./index.js',
	output:{
		path:path.join( __dirname,"js" ),
		filename:"bundle.js"
	},
	externals:{
		"jquery":"$"
	}
}