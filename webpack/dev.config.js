const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
      },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/,//正则表达式匹配图片规则
        use: [{
        loader:'url-loader',
        options:{
            limit:8192,//限制打包图片的大小：
            //如果大于或等于8192Byte，则按照相应的文件名和路径打包图片；如果小于8192Byte，则将图片转成base64格式的字符串。
            name:'images/[name]-[hash:8].[ext]',//images:图片打包的文件夹；
            //[name].[ext]：设定图片按照本来的文件名和扩展名打包，不用进行额外编码
            //[hash:8]：一个项目中如果两个文件夹中的图片重名，打包图片就会被覆盖，加上hash值的前八位作为图片名，可以避免重名。
        }
        }]}
    ]
  },
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