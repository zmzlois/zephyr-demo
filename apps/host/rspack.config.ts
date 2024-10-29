import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/rspack/module-federation';
import { join } from 'node:path';
import { mfConfig } from './module-federation.config';
import { withZephyr } from "zephyr-webpack-plugin"

const config = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(mfConfig),
  withZephyr(),
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
      exclude: /node_modules(?!\/@acme)|packages\/components/,
      type: 'css',
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: {
                tailwindcss: {
                  config: join(
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

    return config;
  }
);

export default config;
