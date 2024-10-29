import { defineConfig } from '@rslib/core';
import { workspaceRoot } from '@nx/devkit';
import { join } from 'node:path';
import { pluginReact } from '@rsbuild/plugin-react';

// Helper to make paths workspace-root relative
const toWorkspacePath = (path: string) => join(workspaceRoot, path);

// Get the relative component path
const COMPONENT_PATH = 'packages/components';

export default async ({ envMode }) => {
  const config = defineConfig({
    plugins: [pluginReact()],
    source: {
      entry: {
        index: join(COMPONENT_PATH, 'src/index.ts'),
      },
      tsconfigPath: join(COMPONENT_PATH, 'tsconfig.lib.json'),
    },
    tools: {
      lightningcssLoader: false,
      //@ts-expect-error
      postcss: {
        postcssOptions: {
          plugins: [
            {
              tailwindcss: {
                config: join(COMPONENT_PATH, './tailwind.config.cjs'),
              },
            },
          ],
        },
      },
    },
    lib: [
      {
        dts: {
          bundle: false,
        },
        format: 'esm',
        output: {
          distPath: {
            root: toWorkspacePath(`${COMPONENT_PATH}/dist/esm`),
            css: '.',
          },
        },
      },
      // {
      //   dts: {
      //     bundle: false,
      //   },
      //   format: 'cjs',
      //   output: {
      //     distPath: {
      //       root: toWorkspacePath(`${COMPONENT_PATH}/dist/cjs`),
      //       css: '.',
      //     },
      //   },
      // },
      // {
      //   format: 'mf',
      //   output: {
      //     distPath: {
      //       root: './dist/mf',
      //     },
      //     assetPrefix: 'http://localhost:3001/mf',
      //   },
      //   plugins: [
      //     pluginModuleFederation({
      //       name: 'components',
      //       exposes: {
      //         '.': `${COMPONENT_PATH}/src/index.ts`,
      //       },
      //     }),
      //   ],
      // },
    ],
  });

  return config;
};
