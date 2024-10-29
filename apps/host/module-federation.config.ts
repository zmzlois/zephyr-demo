import type { ModuleFederationConfig } from '@nx/rspack/module-federation';

const sharedLibraries = [
  'react',
  'react-dom',
  'react-router-dom',
  '@acme/components',
];

export const mfConfig: ModuleFederationConfig = {
  name: 'host',
  remotes: ['hero'],
  shared: (library, sharedConfig) => {
    if (sharedLibraries.includes(library)) {
      if (library === '@acme/components') {
        return { singleton: true, requiredVersion: false };
      }
      return sharedConfig;
    }
    return false;
  },
  disableNxRuntimeLibraryControlPlugin: true,
};
