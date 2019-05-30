const path = require('path');
const nodeExternals = require('webpack-node-externals');
const moduleConfig = require('./module')

module.exports = {
  mode: 'production',
  entry: './src/Component.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2'
  },
  module: moduleConfig,
  externals: [nodeExternals()]
};
