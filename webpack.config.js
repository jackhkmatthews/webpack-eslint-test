const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ClosurePlugin = require("closure-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/home/home.js",
    success: "./src/success/success.js",
    shared: "./src/shared/foo.js"
  },
  optimization: {
    minimizer: [new ClosurePlugin({ mode: "STANDARD", platform: "native" })],
    splitChunks: {
      minSize: 1,
      chunks: "all"
    }
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: "body",
      chunks: ["home", "home~shared~success"],
      filename: "index.html",
      template: "./src/home/index.html"
    }),
    new HtmlWebpackPlugin({
      inject: "body",
      chunks: ["success", "home~shared~success"],
      filename: "success.html",
      template: "./src/success/index.html"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
