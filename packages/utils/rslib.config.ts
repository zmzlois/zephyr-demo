import { defineConfig } from '@rslib/core';
import { workspaceRoot } from '@nx/devkit';
import { join } from 'node:path';

// Helper to make paths workspace-root relative
const toWorkspacePath = (path: string) => join(workspaceRoot, path);

// Get the relative component path
const COMPONENT_PATH = 'packages/utils';

export default defineConfig({
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
