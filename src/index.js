import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'
import Logo from './rsd-logo.png'

import debug from 'debug'
const log = debug('app:index')

log(`API_URL: ${process.env.API_URL}`)
log(`NODE_ENV: ${process.env.NODE_ENV}`)
log(`PORT: ${process.env.PORT}`)
log(`DEBUG: ${process.env.DEBUG}`) 

ReactDOM.render(
  <div>
    <h1 className="hello">Hello React! can you hear ME?</h1>
    <img src={Logo} />
  </div>
  , 
  document.getElementById('root')
)
