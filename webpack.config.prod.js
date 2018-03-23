var webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const merge  = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const { resolve }       = require('path');

module.exports = merge(commonConfig, {
  entry: './src/index.tsx',

  // output: {
  //   filename: 'static/bundle.js',
  //   path: resolve(__dirname, 'dist'),
  //   publicPath: '/'
  // },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader', options: { happyPackMode: true } }
        ],
        exclude: /node_modules/
      }
    ]
  }
});
