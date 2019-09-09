let config = require('./webpack.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackMonitor = require('webpack-monitor');

config.plugins.push(     
    new BundleAnalyzerPlugin({        
        analyzerPort: 8006
    }),
    new WebpackMonitor({
        capture: true,
        launch: true,
        port: 8007
    })
);

module.exports = config;