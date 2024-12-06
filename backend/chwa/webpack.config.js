const nodeExternals = require('webpack-node-externals');
const swcDefaultConfig = require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory().swcOptions;

module.exports = function(options, webpack) {
  return {
    ...options,
    entry: [options.entry],
    target: 'node',
    mode: 'development',
    devtool: 'inline-source-map',
    watchOptions: {
      ignored: '**/node_modules',
    },
    externals: [
      nodeExternals({}),
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'swc-loader',
            options: swcDefaultConfig,
          },
        },
      ],
    },
    plugins: [
      ...options.plugins,
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
    ],
  };
};
