var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.scss', '.ts', '.js']
  },

  entry: {
    'app': './src/app.ts',
    'vendor': [
      'angular2/platform/browser',
      'angular2/core',
      'angular2/http',
      'angular2/router'
     ]
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],

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