import React from 'react'
import {App} from './App.js'
import {People} from './People.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
export const Routerer= () => {
  return(
    <Router>
      <div>
        <ul>
          <li><Link to="/">News</Link></li>
          <li><Link to="/peoples">peoples</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={App}/>
        <Route path="/peoples" component={People}/>
      </div>
    </Router>
  )
}
