import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/rspack/module-federation';
import { join } from 'node:path';
import { mfConfig } from './module-federation.config';

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

    config.module.rules.push({
      test: /\.css$/,
      type: 'css',
      exclude: /node_modules(?!\/@acme)|packages\/components/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: {
                tailwindcss: {
                  config: join(
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
  }
);
