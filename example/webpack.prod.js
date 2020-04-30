const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "main.js"),
  output: {
    filename: "[name]_[hash:16].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          {
            loader: path.resolve(
              __dirname,
              "../dist/compile-less-loader.cjs.js"
            ),
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: "file-loader",
      }
    ],
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      "@": path.resolve(__dirname, "."),
    },
    extensions: [".js", ".json", ".vue", ".less"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]_[chunkhash:8].css",
      chunkFilename: "[id].css",
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "demo",
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
      inject: "body",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new CleanWebpackPlugin(),
  ],
};
