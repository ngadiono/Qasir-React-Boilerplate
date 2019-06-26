let config = require('./webpack.config.js');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.output = {    
    path: path.resolve(__dirname, './public')
}

config.plugins.push(     
    new HtmlWebpackPlugin({
        title: 'Qasir Mitra Application',
        template: './packages/server/index.html',
        inject: true
    })
);

module.exports = config;