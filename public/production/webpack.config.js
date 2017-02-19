const webpack = require('webpack');
var path = require('path');

 module.exports = {
    resolve: {
  	    root: [ path.resolve('../app') ]
	},
     entry: {
       app: '../app/app.js',
		pdf: '../app/pdf.js',
     },
     output: {
         path: '../js',
         filename: '[name].js'
     },

     module: {
        loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
        }]
     },

     plugins:[
         new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
        new webpack.optimize.UglifyJsPlugin()
     ]
    
 }
