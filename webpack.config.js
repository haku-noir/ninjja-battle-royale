const webpack = require("webpack");
const path = require("path");

module.exports = [
  {
    cache: true,
    devtool: "source-map",
    devServer: {
      historyApiFallback: true,
    },
    context: path.resolve(__dirname, "src/client"),
    entry: "index.ts",
    output: {
      path: __dirname + "/public",
      filename: "bundle.js",
      publicPath: "/public",
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
      ],
    },
    resolve: {
      modules: [path.join(__dirname, "src/client"), "node_modules"],
      extensions: [".ts", ".js", ".json"],
    },
  },
];
