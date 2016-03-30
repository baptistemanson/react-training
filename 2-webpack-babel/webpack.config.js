/* eslint-disable */

//path is a native module that doesnt require to be installed.
var path = require("path");

var outputLocation = path.join(__dirname, "public");

module.exports =
{
  entry: {
    "es":"./es2015-main.js",
    //"commonjs":'./commonjs-main.js',
  },
  target:'web',
  output: {
    path: outputLocation,
    filename: "bundle.js",
    publicPath: "/public/",
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader?presets[]=es2015"
    }
    ]
  }
}