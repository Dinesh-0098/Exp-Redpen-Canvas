const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


const baseConfig = require('./webpack.config.js');

const plugins = [
	// 로더들에게 옵션을 넣어주는 플러그인
	new webpack.LoaderOptionsPlugin({
		minimize: true,
	}),
	// index.html 로 의존성 파일들 inject해주는 플러그인
	new HtmlWebpackPlugin({
		filename: 'index.html',
		title: 'React Design Editor',
		meta: {
			description: `React Design Editor has started to developed direct manipulation of editable design tools like Powerpoint, We've developed it with react.js, ant.design, fabric.js`,
		},
	}),
];
module.exports = merge(baseConfig, {
	mode: 'production',
	devtool:'source-map',
	entry: {
		vendor: ['react', 'react-dom', 'lodash', 'fabric', 'antd'],
		app: ['@babel/polyfill', path.resolve('src/index.js')],
	},
	output: {
		// entry에 존재하는 app.js, vendor.js로 뽑혀 나온다.
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		publicPath: './',
	},
	plugins,
});
