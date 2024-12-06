/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars */
const nodeExternals = require('webpack-node-externals');
const { SwcMinifyWebpackPlugin } = require('swc-minify-webpack-plugin');
const { loaders } = require('./webpack.utils');

module.exports = module.exports = function(options, webpack) {
  return {
    optimization: {
      mergeDuplicateChunks: false,
      minimize: true,
      minimizer: [new SwcMinifyWebpackPlugin()],
    },
    externals: [
      nodeExternals({}),
    ],
    module: {
      rules: [loaders.swc],
    },
    plugins: [
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
    ],
  };
};
