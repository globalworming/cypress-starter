const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    getCompareSnapshotsPlugin(on, config);
}
