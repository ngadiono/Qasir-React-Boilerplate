// HRM
const compose = (plugins) => ({
  webpack(config, options) {
    return plugins.reduce((config, plugin) => {
      if (plugin instanceof Array) {
        const [_plugin, ...args] = plugin;
        plugin = _plugin(...args);
      }
      if (plugin instanceof Function) {
        plugin = plugin();
      }
      if (plugin && plugin.webpack instanceof Function) {
        return plugin.webpack(config, options);
      }
      return config;
    }, config);
  },

  webpackDevMiddleware(config) {
    return plugins.reduce((config, plugin) => {
      if (plugin instanceof Array) {
        const [_plugin, ...args] = plugin;
        plugin = _plugin(...args);
      }
      if (plugin instanceof Function) {
        plugin = plugin();
      }
      if (plugin && plugin.webpackDevMiddleware instanceof Function) {
        return plugin.webpackDevMiddleware(config);
      }
      return config;
    }, config);
  },
});

// Bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer');
module.exports = compose([
  [
    withBundleAnalyzer,
    {
      enabled: process.env.ANALYZE === 'true',
    },
  ],
]);

// Absolute import
const path = require('path');
module.exports = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['config'] = path.join(__dirname, 'config');
    config.resolve.alias['layouts'] = path.join(__dirname, 'layouts');
    config.resolve.alias['styles'] = path.join(__dirname, 'styles');
    return config;
  },
};