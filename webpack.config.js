var webpack = require('webpack');
var path = require('path');


// Webpack Config
var webpackConfig = {
  entry: {
    'main': 'main.browser',
  },

  output: {
    path: path.resolve('./dist'),
  },

  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(true),
    // new webpack.optimize.CommonsChunkPlugin({ name: ['main'], minChunks: Infinity }),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
  ],

  module: {
    loaders: [
      // .ts files for TypeScript
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  }

};

// Our Webpack Defaults
var defaultConfig = {
  // devtool: 'cheap-module-source-map',
  devtool: 'source-map',
  cache: true,
  // debug: true,
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    modules: [
      path.resolve('./build'),
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    // root: [  ],
    extensions: ['.ts', '.js']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },
};

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);
