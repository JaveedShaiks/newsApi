const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const config = {
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(commonConfig, config);
