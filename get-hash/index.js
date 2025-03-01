// This library uses resolve-url-loader which has a transitive dependency on loader-utils
const resolveUrlLoader = require('resolve-url-loader');
const resolveUrlLoaderPackage = require('resolve-url-loader/package.json');

/**
 * A function that demonstrates using resolve-url-loader
 * @param {string} input - The input string
 * @returns {string} - Information about the package
 */
function getHash(input) {
  // Just demonstrating that we're using the package
  return `Processing ${input} with resolve-url-loader v${resolveUrlLoaderPackage.version || 'unknown'} (which uses loader-utils as a transitive dependency)`;
}

module.exports = {
  getHash
};