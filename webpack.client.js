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
  ],
};

module.exports = merge(commonConfig, config);
