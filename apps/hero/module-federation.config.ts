import type { ModuleFederationConfig } from '@nx/rspack/module-federation';

const sharedLibraries = ['react', 'react-dom', '@acme/components'];

export const mfConfig: ModuleFederationConfig = {
  name: 'hero',
  exposes: {
    './ProductHero': './src/features/Products/components/ProductHero.tsx',
    './ProductsOnSale': './src/features/Products/components/ProductsOnSale.tsx',
  },
  shared: (library, sharedConfig) => {
    if (sharedLibraries.includes(library)) {
      return sharedConfig;
    }
    return false;
  },
  disableNxRuntimeLibraryControlPlugin: true,
};
