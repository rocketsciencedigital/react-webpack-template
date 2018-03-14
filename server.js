require('dotenv').config()

const path = require('path')
const express = require('express')
const debug = require('debug')

debug.enable('app:*')

const config = require('./webpack.common')

const app = express()
const log = debug('app:server')

// static files
app.use(express.static(path.resolve(__dirname, config.constants.output_dir)))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, config.constants.output_dir, 'index.html'))
})

app.listen(process.env.PORT, null, null, () => {
  log(`Server is listening on PORT:${process.env.PORT} NODE_ENV:${process.env.NODE_ENV} API:${process.env.API_URL}`)
})
