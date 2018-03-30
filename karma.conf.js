/* eslint-disable no-var, strict */
'use strict';
process.env.NODE_ENV = 'development';
const webpackConfig = require('./webpack.config.js')('dev'); //prod was working as well
const merge  = require('webpack-merge');
const webpack = require('webpack');

const webpackConfigModule = {
  rules: [
    {
      test: /\.tsx?$/,
      use: [
         
          { loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: false
          } 
      }
      ],
      exclude: [/node_modules/],
    },
    { test: /\.(css|less|scss)$/, loader: 'ignore-loader' },
    {
      test: /\.html$/,
        loader: 'raw-loader',
        exclude: /node_modules/
    }
]
};

module.exports = function(config) {
  // Documentation: https://karma-runner.github.io/0.13/config/configuration-file.html
  config.set({
    basePath: '',
    frameworks: [ 'jasmine'],
    browsers: [ 'Chrome', 'PhantomJS' ],
    files: [
      // This ensures we have the es6 shims in place and then loads all the tests
      'test/main.js'
    ],
    port: 9876,
    logLevel: config.LOG_INFO, //config.LOG_DEBUG

    preprocessors: {
        'test/main.js': [ 'webpack', 'sourcemap' ]
    },


    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: webpackConfigModule,
      resolve: webpackConfig.resolve
    },

    webpackMiddleware: {
      quiet: true,
      stats: {
        colors: true
      }
    },

    // reporter options
    mochaReporter: {
      colors: {
        success: 'bgGreen',
        info: 'cyan',
        warning: 'bgBlue',
        error: 'bgRed'
      }
    }
  });
};