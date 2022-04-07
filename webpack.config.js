const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  watch: true,
  devtool: "cheap_module_eval_source_map",
  entry: "./public/assets/js/index.js",
  output: {
    filename: "application.js",
    path: path.resolve(__dirname, "public", "build", "js"),
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 999999,
              name: "../../img/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2?|eot|ttf|otf|wav)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "../../fonts/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/application.css",
    }),
  ],
};
