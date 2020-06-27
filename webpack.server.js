const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(commonConfig, config);
