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
  config.module.rules = [
    ...config.module.rules.filter(
      (r) => r.type !== 'css/module' && r.type !== 'css'
    ),
  ];

  config.devServer = {
    ...config.devServer,
    historyApiFallback: true,
  };

  config.module.rules.push({
    test: /\.css$/,
    type: 'css',
    use: [
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: {
              tailwindcss: {
                config: path.join(
                  context.context.root,
                  'apps/mfe-monorepo/tailwind.config.js'
                ),
              },
              autoprefixer: {},
            },
          },
        },
      },
    ],
  });

  config.infrastructureLogging = {
    colors: true,
    level: 'verbose',
  };

  return config;
});
