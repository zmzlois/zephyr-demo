import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { workspaceRoot } from '@nx/devkit';
import { join } from 'node:path';
import { pluginReact } from '@rsbuild/plugin-react';

// Helper to make paths workspace-root relative
const toWorkspacePath = (path: string) => join(workspaceRoot, path);

// Get the relative component path
const COMPONENT_PATH = 'packages/components';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: join(COMPONENT_PATH, 'src/index.ts'),
    },
    tsconfigPath: join(COMPONENT_PATH, 'tsconfig.lib.json'),
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
        },
      },
    },
    {
      dts: {
        bundle: false,
      },
      format: 'cjs',
      output: {
        distPath: {
          root: toWorkspacePath(`${COMPONENT_PATH}/dist/cjs`),
        },
      },
    },
  ],
});
