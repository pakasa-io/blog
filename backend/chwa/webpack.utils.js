const swcDefaultConfig =
  require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory()
    .swcOptions;

module.exports = {}

const loaders = {}
loaders.swc = {
  test: /\.ts$/,
  exclude: /node_modules/,
  use: {
    loader: 'swc-loader',
    options: swcDefaultConfig,
  }
}

module.exports.loaders = loaders;


