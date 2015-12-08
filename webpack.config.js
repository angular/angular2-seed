var LiveReloadPlugin = require('webpack-livereload-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.scss', '.ts', '.js'],
    
    //TODO:remove when alpha.49 drops
    alias: {
      'rxjs/operators/toPromise': 'rxjs/operator/toPromise.js',
      'rxjs/subjects/ReplaySubject': 'rxjs/subject/ReplaySubject',
      'rxjs/operators/take': 'rxjs/operator/take'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new LiveReloadPlugin()
  ],

  entry: './src/main.ts',
  output: {
    path: "./dist",
    filename: "bundle.js"
  },

  devtool: 'eval',

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      
    ]
  },

  devServer: {
    historyApiFallback: true,
    hot: false
  }
};