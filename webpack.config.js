var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'app':    './src/app.ts',
    'vendor': './src/vendor.ts'
  },

  output: {
    path:     './dist',
    filename: '[name].bundle.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].bundle.js'),
  ],

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader', exclude: /node_modules(\/|\\)rxjs/ }
    ],
    loaders: [
      // .ts files for TypeScript
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },

    ],
    noParse: noParseDirectories()
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  devServer: {
    historyApiFallback: true
  }
};



function noParseDirectories() {
  return [
    path.join(__dirname, 'node_modules', 'angular2', 'bundles')
  ];
}
