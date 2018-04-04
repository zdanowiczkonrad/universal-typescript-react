// shared config (dev and prod)
const webpack         = require('webpack');
const { resolve }       = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SLASH_ESCAPE_LESS_WITH_EXTRACT_PLUGIN = "\\/\\/";

module.exports = {
  resolve: {
    alias: {
        '@': resolve(__dirname, 'src/')
    },
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
  },
//   context: resolve(__dirname, 'src'), <- what was that for?!
/* entry - to be defined by each env */
    output: { // this looks identical for both 
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
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
        {
            test: /\.less$/,
            exclude: /node_modules/,
            loaders: ExtractTextPlugin.extract({fallback: 'style-loader', use: [
              {
                  loader: "css-loader",
                  options: {
                      sourceMap: true,
                      minimize: true
                  }
               },  {
                loader: "postcss-loader",
                options: {
                    sourceMap: 'inline'
                }
             }, {
                loader: "less-loader",
                options: {
                    sourceMap: true,
                    modifyVars: {
                        assets: `\'${SLASH_ESCAPE_LESS_WITH_EXTRACT_PLUGIN}localhost:3000\'`
                    }
                }
             }]}),
        }, 
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ExtractTextPlugin.extract({fallback: 'style-loader', use: [  {
                loader: "css-loader",
                options: {
                    sourceMap: true,
                    minimize: true
                }
             },  {
              loader: "postcss-loader",
              options: {
                  sourceMap: 'inline'
              }
           }, {
              loader: "sass-loader",
              options: {
                  sourceMap: true
              }
           }]}),
          }, 
        {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ExtractTextPlugin.extract({fallback: 'style-loader', use: [{
            loader: "css-loader",
            options: {
                sourceMap: true,
                minimize: true
            }
         },  {
          loader: "postcss-loader",
          options: {
              sourceMap: true
          }
       }]}), 
        }, 
       {
        test: /\.json$/,
          loader: 'json-loader',
          exclude: /node_modules/
      }, 

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      }, 

    {
        test: /\.html$/,
        use: {
            loader: 'html-loader'
        }
    }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
        filename: '[name].[chunkhash].css'
    }),
    new ForkTsCheckerWebpackPlugin({
        tslint: true,
        checkSyntacticErrors: true,
        // watch: ['./src'] // optional but improves performance (fewer stat calls)
    }),
    new webpack.EnvironmentPlugin({
        IS_BROWSER: "true"
    })
  ]
};