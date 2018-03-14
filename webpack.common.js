const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const DotEnv = require('dotenv-webpack')

const output_dir = 'dist'
const src_dir = 'src'

module.exports = {
  constants: {
    output_dir: output_dir,
    src_dir: src_dir,
    host: '0.0.0.0'
  },
  config: {
    entry: {
      polyfills: path.resolve(src_dir, 'polyfills.js'),
      vendor: [
        'lodash',
        'react'
      ],
      print: path.resolve(src_dir, 'print.js'),
      app: path.resolve(src_dir, 'index.js')
    },
    output: {
      path: path.resolve(__dirname, output_dir),
      filename: '[name]_bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/        
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([output_dir]),
      new HtmlWebpackPlugin({
        title: 'Production',
        template: path.resolve(__dirname, src_dir, 'index.html'),
        filename: 'index.html',
        inject: 'body'
      }),
      new webpack.NamedModulesPlugin(),   
      new DotEnv()   
    ]
  }
}
