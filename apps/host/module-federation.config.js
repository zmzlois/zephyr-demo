// @ts-check

/**
 * @type {import('@nx/rspack/module-federation').ModuleFederationConfig}
 **/
module.exports = {
  name: 'host',
  remotes: ['hero'],
};
