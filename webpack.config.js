var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var path = require('path');

// Webpack Config
var webpackConfig = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/app.ts',
  },

  output: {
    path: './dist',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills'],
      minChunks: Infinity
    }),
  ],

  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },

    ]
  }

};

// Our Webpack Defaults
var defaultConfig = {
  devtool: 'cheap-module-eval-source-map',
  cache: true,
  debug: true,
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          path.join(__dirname, 'node_modules', 'rxjs'),
          path.join(__dirname, 'node_modules', '@angular2-material'),
        ]
      }
    ],
    noParse: [
      path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
      path.join(__dirname, 'node_modules', 'angular2', 'bundles')
    ]
  },

  resolve: {
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.ts', '.js']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 0,
      poll: 1000
    }
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  },
}

module.exports = webpackMerge(defaultConfig, webpackConfig);
