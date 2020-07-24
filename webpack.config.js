// const webpack = require("webpack");
const path = require("path");
module.exports = {
  mode: "production", //development || production
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "Mtool.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    //开发服务器的配置
    port: 3000,
    //进度条
    progress: true,
    //指定打开浏览器显示的目录，默认为根目录（项目目录）
    contentBase: "./dome",
    clientLogLevel: "none",
  },
};
