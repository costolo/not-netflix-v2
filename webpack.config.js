const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    // alias: {
      // react: 'preact',
      // 'react-dom': 'preact'
    // },
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        include: [
          path.resolve(__dirname, 'js'),
          path.resolve('node_modules/preact/src')
        ],
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
