'use strict';
var path = require('path');

module.exports = {
	watch: true,
	resolve: {
  	root: [
    	path.resolve('./app')
  	]
	},
	entry: {
		app: './app/app.js'
	},
	output: {
		path: './js',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ test: /\.json$/, loader: 'json' },
			{
				test: /\.scss$/,
				loaders: ['css', 'sass']
			}
		]}
};
