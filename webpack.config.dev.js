var path = require('path');
var webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const merge  = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const { resolve }       = require('path');

module.exports = merge(commonConfig, {
//   output: { // this looks identical for both 
//     filename: 'bundle.js',
//     // the output bundle

//     path: resolve(__dirname, 'dist'),

//     publicPath: '/static/'
// // necessary for HMR to know where to load the hot update chunks
// },
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index.tsx',
    // the entry point of our app
  ],
  devtool: 'inline-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],

  devServer: {
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  }
});
