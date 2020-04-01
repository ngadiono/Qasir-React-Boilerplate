let config = require('./webpack.config.js');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const JSPath = 'assets/js/';

config.output = {
  filename: JSPath + '[name].[contenthash].js',
  path: path.resolve(__dirname, './build')
};

config.devtool = '';

let outputFilename = 'index.html';

config.plugins.push(
  new CleanWebpackPlugin(['./build/*.js', './build/*.css'], {
    exclude: ['./build/.gitignore', './build/fonts/*']
  }),
  new HtmlWebpackPlugin({
    title: 'Qasir Application',
    template: './packages/server/index.html',
    minify: true,
    cache: true,
    filename: outputFilename
  }),
  new ManifestPlugin({
    fileName: 'manifest.json',
    basePath: process.env.NODE_ENV === 'production' ? '/build/' : '/public/',
    seed: {
      name: 'Qasir Application',
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
  }),
  new CopyPlugin([
    {
      from: './packages/assets/locales/',
      to: 'assets/locales/'
    }
  ]),
  new CompressionPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  }),
  new CompressionPlugin({
    filename: '[path].br[query]',
    algorithm: 'brotliCompress',
    test: /\.(js|css|html|svg)$/,
    compressionOptions: { level: 11 },
    threshold: 10240,
    minRatio: 0.8
  })
);

config.optimization = Object.assign(config.optimization, {
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all'
      }
    }
  }
});

module.exports = config;
