var path = require('path');
var webpack = require('webpack');

const merge  = require('webpack-merge');
const devConfig = require('./webpack.config.dev');

/**
 * This configuration file is just an extention on top of the dev config
 * to enable full HMR experience. it is separated from the dev build
 * as it adds an overhead in the form of the babel transpilation
 */
const tsxLoaderRule = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
  {
    // This is needed and must for HMR to preserve local state of components
    // unfortunately babel instrumentation to the ES5 code resulted from the ts-loader
    // breaks source maps
      loader: "babel-loader",
      options: {
        babelrc: true,
      // This is a feature of `babel-loader` for Webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
        cacheDirectory: true
      }
    }, 
    {
      loader: 'ts-loader',
      options: {
          happyPackMode: true,
          transpileOnly: true
      }
    }] 
};

const filtered = devConfig.module.rules
  .filter(rule => rule.test.toString() !== /\.tsx?$/.toString());

const modifiedRules = filtered.concat(tsxLoaderRule);

const config = Object.assign(devConfig, {
  module: {
    rules: modifiedRules
  }
});

module.exports = config;