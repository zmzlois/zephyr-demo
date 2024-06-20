const { composePlugins, withNx, withReact } = require('@nx/rspack');
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/rspack');
const mfConfig = require('./module-federation.config');
const path = require('path');

module.exports = composePlugins(withNx(), withReact(), (config, context) => {
  config.context = path.join(context.context.root, 'apps/mfe-monorepo');

  config.plugins.push(new ModuleFederationPlugin({ ...mfConfig }));
  config.output.publicPath = '/';
  config.devServer = {
    ...config.devServer,
    port: 4200,
  };

  const cssRule = config.module.rules.find(
    (r) => r.test.toString() === '/\\.css$/'
  );

  // Change the css rule to auto so not every css file is a module.
  if (cssRule) {
    cssRule.type = 'css/auto';
  }

  config.infrastructureLogging = {
    colors: true,
    level: 'verbose',
  };

  return config;
});
