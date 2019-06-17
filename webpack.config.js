const path = require('path')
let pathEnv = process.cwd() + '/.env'
if (process.env.APP_ENV == "staging") {
  pathEnv = process.cwd() + '/config/staging/env' 
} else if (process.env.APP_ENV == "production") {
  pathEnv = process.cwd() + '/config/production/env'
}

require('dotenv').config({path: pathEnv})
let webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const PublicPath = "./public/";
let PublicPathImage= "./public/"

if (process.env.NODE_ENV ===  "production") {
  PublicPathImage = "./";
}

let plugins  = [];

plugins.push(new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: PublicPath + "bundle.css",
}))

let configurationWebpack = {
  mode: process.env.NODE_ENV,
  optimization: {
      minimizer: [
        new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
  },
  plugins: [],
  entry: ['./packages/web/index.jsx'],
  output: {
      path: __dirname,
      filename: PublicPath + 'bundle.js'
  },
  resolve: {
      extensions: ['.js', '.json', '.jsx', '.css'],
      alias: {
          moment$: 'moment/moment.js',
      },
  },
  module: {
      rules: [
        {
          test: /\.[s]?[ac]ss$/,
          use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader'
          ]
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
              plugins: [
                '@babel/plugin-transform-react-jsx', 
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-export-default-from', 
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import'
              ]
          }
        },
        {
          test: /\.(png|jpg|gif|svg|jpeg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                  name: '[hash:12].[ext]',
                  publicPath: 'images/',
                  outputPath: PublicPathImage + 'images/'
                }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                }
              }
            },
          ]
        }
      ],
  }
}

plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': "'"+process.env.NODE_ENV+"'",
    'APP_ENV': "'"+process.env.APP_ENV+"'",
    'HOST_API_URL': "'"+process.env.API_HOST+"'",
    'API_KEY_MAPS':"'"+process.env.API_KEY_MAPS+"'",
    'WEB_API_KEY': "'"+process.env.WEB_API_KEY+"'",
  }
}))

configurationWebpack.plugins = plugins
module.exports = configurationWebpack