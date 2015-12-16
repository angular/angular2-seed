var webpack = require('webpack');

module.exports = {
  entry: {
    'app': './src/app.ts',
    'vendor': './src/vendor.ts'
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
    noParse: [ /angular2\/bundles\/.+/ ]
  },

  devServer: {
    historyApiFallback: true
  }
};
