const { composePlugins, withNx, withReact } = require('@nx/rspack');
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/rspack');
const mfConfig = require('./module-federation.config');
const path = require('node:path');
const { withZephyr } = require('zephyr-webpack-plugin');

module.exports = composePlugins(
  withNx(),
  withReact(),
  (config, context) => {
    config.context = path.join(context.context.root, 'apps/hero');

    config.plugins.push(new ModuleFederationPlugin({ ...mfConfig }));
    config.output.publicPath = 'auto';

    config.module.rules = [
      ...config.module.rules.filter(
        (r) => r.type !== 'css/module' && r.type !== 'css'
      ),
    ];

    config.module.rules.push({
      test: /\.css$/,
      type: 'css',
      exclude: /node_modules(?!\/@acme)|packages\/components\/dist/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: {
                tailwindcss: {
                  config: path.join(
                    context.context.root,
                    'apps/hero/tailwind.config.js'
                  ),
                },
                autoprefixer: {},
              },
            },
          },
        },
      ],
    });

    return config;
  },
  withZephyr()
);
