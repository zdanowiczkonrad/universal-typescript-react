var path = require('path');
var webpack = require('webpack');

const merge  = require('webpack-merge');
const devConfig = require('./webpack.config.dev');

/**
 * This configuration file is just an extention on top of the dev config
 * to enable full HMR experience. it is separated from the dev build
 * because it doesn't show source maps in TypeScript
 */

module.exports = merge(devConfig, {
  module: {
      rules: [{
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
          }]
  }
});
