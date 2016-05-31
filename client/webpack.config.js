var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './index',
  output: {
    path: path.resolve('../static/'),
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
