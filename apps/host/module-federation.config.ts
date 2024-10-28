import type { ModuleFederationConfig } from '@nx/rspack/module-federation';

const sharedLibraries = ['react', 'react-dom', '@acme/components'];

export const mfConfig: ModuleFederationConfig = {
  name: 'host',
  remotes: ['hero'],
  shared: (library, sharedConfig) => {
    if (sharedLibraries.includes(library)) {
      return sharedConfig;
    }
    return false;
  },
  disableNxRuntimeLibraryControlPlugin: true,
};
