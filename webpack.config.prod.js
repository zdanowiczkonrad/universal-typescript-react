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
      cacheGroups: { //https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points
				commons: {
					name: "commons",
					chunks: "initial",
					minChunks: 2,
					minSize: 0
				}
			}
    },
    occurrenceOrder: true, // To keep filename consistent between splits
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true, // this is a bug in https://github.com/webpack/webpack/issues/6614#issuecomment-369376775
        uglifyOptions: {
          compress: {
            drop_console: true,
          }
        }
      })
    ]
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
