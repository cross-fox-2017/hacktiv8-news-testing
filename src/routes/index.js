import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Menu } from '../components'
import { Home } from './Home'
import { About } from './About.jsx'

export const Routes = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  )
}
