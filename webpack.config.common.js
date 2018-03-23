// shared config (dev and prod)
const webpack         = require('webpack');
const { resolve }       = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// TODO later
//const { FRONTEND_URL, BACKEND_URL, STRIPE_API_KEY }  = require('./env.config');


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
        filename: '[name].js',
        // the output bundle

        path: resolve(__dirname, 'dist'),

        publicPath: '/static/'
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
            exclude: /node_modules/,
        }, 
        {
            test: /\.less$/,
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
                    sourceMap: true
                }
             }]}),
        }, 
        {
            test: /\.scss$/,
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
          loader: 'json-loader'
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
        filename: '[name].css'
    }),
    new ForkTsCheckerWebpackPlugin({
        tslint: true,
        checkSyntacticErrors: true,
        // watch: ['./src'] // optional but improves performance (fewer stat calls)
      }),
    // new StyleLintPlugin(),
    // new webpack.DefinePlugin({
    //     FRONTEND_SERVER_URL: JSON.stringify(FRONTEND_URL),
    //     PROXY_SERVER_URL: JSON.stringify(BACKEND_URL),
    //     STRIPE_API_KEY: JSON.stringify(STRIPE_API_KEY)
    // })
  ]
};