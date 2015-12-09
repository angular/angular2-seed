var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.scss', '.ts', '.js']
  },

  entry: './src/main.ts',
  output: {
    path: "./dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      
    ]
  },

  devServer: {
    historyApiFallback: true
  }
};