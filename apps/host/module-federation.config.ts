import type { ModuleFederationConfig } from '@nx/rspack/module-federation';

const sharedLibraries = [
  'react',
  'react-dom',
  'react-router-dom',
  '@acme/components',
];

const mfConfig: ModuleFederationConfig = {
  name: 'host',
  remotes: ['hero'],
  shared: (library, sharedConfig) => {
    if (sharedLibraries.includes(library)) {
      if (library === 'react-router-dom') {
        return { singleton: true, requiredVersion: '6.27.0' }
      }
      if (library === '@acme/components') {
        return { singleton: true, requiredVersion: false };
      }
      return sharedConfig;
    }
    return false;
  },
  disableNxRuntimeLibraryControlPlugin: true,
};

export default mfConfig;
