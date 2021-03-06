const path = require('path');
const compose = (plugins) => ({
  webpack(config, options) {
    // Absolute import
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['config'] = path.join(__dirname, 'src/config');
    config.resolve.alias['layouts'] = path.join(__dirname, 'src/layouts');
    config.resolve.alias['lib'] = path.join(__dirname, 'src/lib');
    config.resolve.alias['modules'] = path.join(__dirname, 'src/modules');
    config.resolve.alias['styles'] = path.join(__dirname, 'src/styles');

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
