let config = require('./webpack.config.js');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const JSPath = 'assets/js/';

config.output = {
  filename: JSPath+'[name].[contenthash].js',
  path: path.resolve(__dirname, './public')
}

config.plugins.push(
    new CleanWebpackPlugin(['./public/*.js', './public/*.css'],{
        exclude: [
            './public/.gitignore',
            './public/fonts/*',
        ],
    }),
    new HtmlWebpackPlugin({
        title: 'Qasir Mitra Application',
        template: './packages/server/template.html',
        minify: true,
        cache: true
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
});

module.exports = config;
