const path = require('path')
const express = require('express')

const config = require('./webpack.common')

const debug = require('debug')
const log = debug('app:server')

const app = express()

// static files | should use reverse-proxy in production
app.use(express.static(path.resolve(__dirname, config.constants.output_dir)))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, config.constants.output_dir, 'index.html'))
})

app.listen(process.env.PORT, null, () => {
  log(`Server is running on ${process.env.PORT}`)
  log(`NODE_ENV:${process.env.NODE_ENV} API:${process.env.API_URL}`)
})
