const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config, { isServer }) => {
    // Absolute import
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['config'] = path.join(__dirname, 'src/config');
    config.resolve.alias['layouts'] = path.join(__dirname, 'src/layouts');
    config.resolve.alias['lib'] = path.join(__dirname, 'src/lib');
    config.resolve.alias['modules'] = path.join(__dirname, 'src/modules');
    config.resolve.alias['styles'] = path.join(__dirname, 'src/styles');

    if (isServer) {
      const antStyles = /antd-mobile\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    return config;
  },
});
