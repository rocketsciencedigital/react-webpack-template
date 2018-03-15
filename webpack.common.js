const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const output_dir = 'dist'
const src_dir = 'src'
const port = process.env.PORT || 8080
const host = process.env.HOST || '0.0.0.0'

module.exports = {
  constants: {
    output_dir: output_dir,
    src_dir: src_dir,
    host: host,
    port: port
  },
  config: {
    entry: {
      polyfills: path.resolve(src_dir, 'polyfills.js'),
      vendor: [        
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
      // new DotEnv()  
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
        DEBUG: false,
        API_URL: 'localhost:8081',
        PORT: port
      }) 
    ]
  }
}
