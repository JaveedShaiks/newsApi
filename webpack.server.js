const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpackNodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const config = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new webpack.DefinePlugin({
      __isServer__: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      minimize: true,
      sourceMap: true,
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
  ],
  devtool: 'source-map',
  devServer: {
    compress: true,
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(commonConfig, config);
