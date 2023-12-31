const path = require("path");
// //webpack is a bundling tool, it helps reduce http request by bundling codes together,less imports required,  it optimizes the codes by minifying it.
//it is also able to transform ts to js codes and bundle it
module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devServer: {
    compress: true,
    port: 8080,

    // 👇️ set this property
    allowedHosts: "all",
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        //a regular expression that checks for the file ext
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
