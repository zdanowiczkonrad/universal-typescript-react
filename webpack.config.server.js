var path = require('path');
var webpack = require('webpack');

module.exports = {
    target: 'node',
    entry: path.resolve(__dirname, 'src', 'server.tsx'),
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'server')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['ts-loader'],
                exclude: /node_modules/
            },
            { test: /\.(css|less|scss)$/, loader: 'ignore-loader' }
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        },  
        extensions: ['.tsx', '.ts', '.js']
    }
};