// @ts-check

/**
 * @type {import('@nx/rspack/module-federation').ModuleFederationConfig}
 **/
module.exports = {
  name: 'hero',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductHero': './src/features/Products/components/ProductHero.tsx',
    './ProductsOnSale': './src/features/Products/components/ProductsOnSale.tsx',
  },
};
