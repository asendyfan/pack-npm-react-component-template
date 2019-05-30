const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const moduleConfig = require('./module.js')
console.log(moduleConfig)
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: moduleConfig,
  devServer: {
    //contentBase: './dist'
    port: 3000,
    open: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
};