const { composePlugins, withNx, withReact } = require('@nx/rspack');
const { withModuleFederation } = require('@nx/rspack/module-federation');
const path = require('node:path');
const mfConfig = require('./module-federation.config');

module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(mfConfig),
  (config, context) => {
    config.module.rules = [
      ...config.module.rules.filter(
        (r) => r.type !== 'css/module' && r.type !== 'css'
      ),
    ];

    config.devServer = {
      ...config.devServer,
      historyApiFallback: true,
      hot: true,
      liveReload: true,
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
                    'apps/host/tailwind.config.js'
                  ),
                },
                autoprefixer: {},
              },
            },
          },
        },
      ],
    });

    // config.watchOptions = {
    //   ignored: /node_modules\/(?!@acme|components)/,
    //   followSymlinks: true,
    //   poll: 1000,
    // };

    return config;
  }
);
