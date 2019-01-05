const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: '#source-map',

  entry: [path.resolve(__dirname, 'src', 'index.js')],

  mode: 'development',

  module: {
    rules: [
      {
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')],
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc',
          failOnError: true,
          failOnWarning: false,
          formatter: require('eslint-friendly-formatter')
        },
        test: /\.js$/
      },
      {
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'DEV_ONLY')
        ],
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },

  output: {
    filename: 'get-object-class.js',
    library: 'getObjectClass',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    umdNamedDefine: true
  },

  plugins: [new webpack.EnvironmentPlugin(['NODE_ENV'])]
};
