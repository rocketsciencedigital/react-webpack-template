const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')


module.exports = merge.smart(common.config, {
  mode: 'production',
  devtool: 'source-map',
  output: {    
    filename: '[name]_[chunkhash]_bundle.js'    
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })    
  ],
  optimization: {
    splitChunks: {
      name: 'common'
    }
  }
})