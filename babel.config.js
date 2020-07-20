const webpack = require('webpack');

module.exports = (api) => {
  if (api.env('test')) {
    return {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        [
          '@babel/plugin-proposal-object-rest-spread',
          {
            options: {
              test: {},
              options: {
                setupFilesAfterEnv: ['./jest.setup.js'],
              },
            },
          },
        ],
      ],
    };
  }
};
