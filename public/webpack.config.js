'use strict';
const fs = require("fs");
const Path = require("path");
const webpack = require("webpack");

module.exports = {
	resolve: {
		modules: ['./app', 'node_modules']
	},
	entry: {
		vendor: [
			'react',
			'react-dom',
			'react-redux',
			'redux-thunk',
			'redux',
			'page',
			'chart.js',
			'quill'
		],
		app: './app/app.js',
		pdf: './app/pdf.js'
	},
	output: {
		path: Path.join(__dirname, "/js/"),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ test: /\.json$/, loader: 'json-loader' },
			{
				test: /\.scss$/,
				loaders: ['css', 'sass']
			}
	]},
	plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.js",
        minChunks: 2
    })
  ]
};
