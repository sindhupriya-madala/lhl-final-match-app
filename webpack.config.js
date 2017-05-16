const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './app/assets/javascripts/components/main.jsx',
  ],
  output: {
    path: path.resolve(__dirname, './app/assets/javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
