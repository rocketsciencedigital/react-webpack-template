const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const path = require('path')

const output_dir = 'dist'

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, output_dir),
    filename: '[name]_bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/        
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin([output_dir]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new UglifyJSPlugin() // production only due to speed
  ],
  devServer: {
    contentBase: path.resolve(__dirname, output_dir),
    hot: true,
    host: '0.0.0.0'
  }
};
