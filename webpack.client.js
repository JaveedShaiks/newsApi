const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');

const config = {
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new webpack.DefinePlugin({
      __isServer__: false,
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
};

module.exports = merge(commonConfig, config);
