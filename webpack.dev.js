let config = require('./webpack.config.js');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const JSPath = 'assets/js/';
const localesPath = 'assets/locales';

config.output = {
  filename: JSPath + 'main.js',
  path: path.resolve(__dirname, './public-dev'),
};

config.devServer = {
  contentBase: path.join(__dirname, 'public-dev'),
  compress: true,
};

config.plugins.push(
  new HtmlWebpackPlugin({
    title: 'Qasir Application',
    template: './packages/server/index.html',
    inject: true,
  }),
  new ManifestPlugin({
    fileName: 'manifest.json',
    basePath: '/public-dev/',
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
      lang: 'en-US',
    },
  }),
  new CopyPlugin([
    {
      from: './packages/assets/locales/',
      to: localesPath,
    },
  ])
);

module.exports = config;
