// @ts-check

/**
 * @type {import('@module-federation/sdk').moduleFederationPlugin.ModuleFederationPluginOptions}
 **/
module.exports = {
  name: 'mfe-monorepo',
  remotes: {
    hero: 'hero@http://localhost:3001/remoteEntry.js',
  },
};
