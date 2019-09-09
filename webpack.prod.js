let config = require('./webpack.config.js');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

config.output = {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './build')
}
let outputFilename = 'index.html';
if (process.env.APP_ENV == 'production') {
    outputFilename = 'output.html';
}

if (process.env.APP_ENV == 'staging') {
    outputFilename = 'stage-output.html'
}
config.plugins.push( 
    new CleanWebpackPlugin(['./build/*.js', './build/*.css'],{
        exclude: [
            './build/.gitignore',
            './build/fonts/*',
        ],
    }),
    new HtmlWebpackPlugin({
        title: 'Qasir Mitra Application',
        template: './packages/server/index.html',
        minify: true,
        cache: true,
        filename: outputFilename
    }),
    new ManifestPlugin({
        fileName: 'manifest.json',
        basePath: process.env.NODE_ENV === 'production' ? '/build/' : '/public/',
        seed: {
          name: 'App name',
          short_name: 'Short app name',
          icons: '',
          start_url: '',
          scope: '.',
          display: 'standalone',
          orientation: 'portrait-primary',
          background_color: '#fff',
          theme_color: '#3f51b5',
          description: 'description app',
          dir: 'ltr',
          lang: 'en-US'
        }
    })
)    

config.optimization = Object.assign(config.optimization, {
    runtimeChunk: 'single',
    splitChunks: {
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all'
         }
       }
    }
})

module.exports = config;