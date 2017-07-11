'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const cssnext = require('postcss-cssnext');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
  entry: './src/index.js',
  output: {
    filename: 'static-[hash].js',
    path: path.resolve(__dirname, '../publish')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            { loader: 'postcss-loader', options: { plugins: [cssnext] } }
          ]
        })
      },
      {
        test: /\.(?:jpg|png|(?:woff2?|ttf|eot|svg)(?:\?v=[0-9]\.[0-9]\.[0-9])?)$/,
        use: 'file-loader?name=static-[hash].[ext]'
      },
      {
        test: /\.md$/,
        use: [
          'html-loader',
          'markdown-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['../publish/static-*'], { allowExternal: true }),
    new ExtractTextPlugin('static-[hash].css'),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};

const dev = {
  devtool: 'source-map',
  devServer: { compress: true }
};

const prod = {
  plugins: [
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
  ]
};

module.exports = env => merge(
  common,
  env === 'production' ? prod : dev
);
