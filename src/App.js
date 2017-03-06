import React from 'react'
import logo from './logo.svg'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { Menu } from './components'
import { Routes } from './routes'

const App = () => (
  <div className='App'>
    <div className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h6>Hacktiv8 News and Peoples</h6>
    </div>
    <Router>
      <div>
        <Menu />
        <Routes />
      </div>
    </Router>
  </div>
)

export default App
