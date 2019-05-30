const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './src/Component.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        // include: resolve('src'),
        use: [
          'style-loader',
          // 模块化的sass
          {
            loader: 'css-loader',
            options: {
              modules: true,// 开启模块化
            }
          },
          'sass-loader',
        ]
      }
    ]
  },
  externals: [nodeExternals()]
};
