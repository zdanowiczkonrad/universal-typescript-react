/** 
The MIT License (MIT)

Copyright (c) 2017 Dan Abramov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


var path = require('path');
var webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const merge  = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const { resolve }       = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(commonConfig, {
  output: { // this looks identical for both 
      filename: '[name].js',
      chunkFilename: '[name].js',
      // the output bundle

      path: resolve(__dirname, 'dist'),

      publicPath: '/static/'
  // necessary for HMR to know where to load the hot update chunks
  },
  entry: [
    './src/index.tsx'
  ],
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
  })
  ],
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: [
               { loader: 'babel-loader' },
                { loader: 'ts-loader',
                options: {
                    happyPackMode: true,
                    transpileOnly: true
                } 
            }
            ],
            exclude: [/node_modules/],
        }
    ]
  },
  

  devServer: {
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  }
});
