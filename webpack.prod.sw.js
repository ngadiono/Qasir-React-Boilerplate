let config = require('./webpack.config.js');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

config.output = {
    filename: '[name].[contenthash].js',
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

module.exports = config