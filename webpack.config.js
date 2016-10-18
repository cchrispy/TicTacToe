var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: __dirname + '/src/index.html',
  inject: 'body'
})

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: __dirname + '/src',
        loaders: [
          'babel'
        ]
      },
      {
        test: /\.s?css$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}