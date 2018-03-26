var webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const merge  = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  entry: {
    vendor: ['react', 'lodash'],
    app: './src/index.tsx'
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'App',
      template: './index.prod.html',
      filename: './index.html'
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
});
