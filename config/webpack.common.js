'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './app/app.js',
  output: {
    path: path.join(__dirname, '..', 'public'),
    publicPath: "/public/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['ng-annotate', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass?sourceMap']},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&progressive=true&interlaced=false'
        ]
      },
      { test: /\.html$/, loader: 'raw' },
      { include: /\.json$/, loaders: ["json"] },
      { test: /\.jade$/, loader: 'jade-loader' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.woff2$/,
        loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml' }
    ]
  },
  devtool: 'eval-source-map',
  externals: {
    foundation: 'Foundation'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '2508wApp',
      template: 'app/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
