import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'
import Logo from './rsd-logo.png'

console.log('API: ', process.env.API_URL)
console.log('NODE_ENV: ', process.env.NODE_ENV)

ReactDOM.render(
  <div>
    <h1 className="hello">Hello React!</h1>
    <img src={Logo} />
  </div>
  , 
  document.getElementById('root')
)
