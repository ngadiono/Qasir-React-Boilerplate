let config = require('./webpack.config.js');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const JSPath = 'assets/js/';

config.output = {
    filename: JSPath+'[name].[contenthash].js',
    path: path.resolve(__dirname, './build')
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
        cache: true
    }),
    new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './packages/service-worker/index.js',
        swDest: path.resolve(__dirname, './build', 'service-worker.js'),
        globDirectory: 'build'
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
