const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: "inline-sourcemap",
  resolve: { 
    extensions: [ '.js', '.jsx' ] 
  },
  entry: [
    './app/assets/javascripts/components/main',
  ],
  output: {
    path: path.resolve(__dirname, './app/assets/javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      }
    ]
  }
}
