const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("rspack-manifest-plugin");

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.jsx",
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    // if remove this plugin, the `manifest.json` can be generated
    new HtmlWebpackPlugin(),
    new WebpackManifestPlugin(),
  ],
};
