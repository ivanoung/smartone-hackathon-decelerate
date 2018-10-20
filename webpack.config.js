const path = require("path")
//Needed for async errors
const { CheckerPlugin } = require("awesome-typescript-loader")
//Compresses JS
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
//Compresses CSS
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  optimization: {
    minimizer: [
      // new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: "./src/index.tsx",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "./dist")
  },

  // Source maps support ('inline-source-map' also works)
  devtool: "source-map",

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  plugins: [new CheckerPlugin()]
}
