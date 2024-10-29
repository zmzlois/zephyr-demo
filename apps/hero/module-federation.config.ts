import type { ModuleFederationConfig } from '@nx/rspack/module-federation';

const sharedLibraries = [
  'react',
  'react-dom',
  'react-router-dom',
  '@acme/components',
];

export const mfConfig: ModuleFederationConfig = {
  name: 'hero',
  exposes: {
    './ProductHero': './src/features/Products/components/ProductHero.tsx',
    './ProductsOnSale': './src/features/Products/components/ProductsOnSale.tsx',
    './ProductDetails': './src/features/Products/components/ProductDetails.tsx',
  },
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
