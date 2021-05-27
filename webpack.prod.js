const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devServer: {
    port:9000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({}),
      //new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
