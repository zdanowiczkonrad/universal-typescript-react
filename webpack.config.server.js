var path = require('path');
var webpack = require('webpack');

module.exports = {
    target: 'node',
    entry: path.resolve(__dirname, 'src', 'server.tsx'),
    devtool: 'inline-source-map',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'server')
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              use: [
                  { loader: 'ts-loader',
                  options: {
                      happyPackMode: true,
                      transpileOnly: true
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
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        },  
        extensions: ['.tsx', '.ts', '.js']
    }
};