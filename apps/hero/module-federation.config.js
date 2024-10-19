// @ts-check

/**
 * @type {import('@module-federation/sdk').moduleFederationPlugin.ModuleFederationPluginOptions}
 **/
module.exports = {
  name: 'hero',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductHero': './src/features/Products/components/ProductHero.tsx',
  },
};
