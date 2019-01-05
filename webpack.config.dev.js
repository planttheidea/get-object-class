const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PORT = 3000;

const defaultConfig = require('./webpack.config');

module.exports = Object.assign({}, defaultConfig, {
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    inline: true,
    lazy: false,
    noInfo: false,
    quiet: false,
    port: PORT,
    stats: {
      colors: true,
      progress: true
    }
  },

  entry: [path.resolve(__dirname, 'DEV_ONLY', 'index.js')],

  plugins: defaultConfig.plugins.concat([new HtmlWebpackPlugin()])
});
