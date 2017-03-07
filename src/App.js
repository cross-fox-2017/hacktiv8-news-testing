import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import News from './components/News/News'
import People from './components/People/People'

const App = () => (
  <Router>
    <div>

      <Route exact path="/" component={News}/>
      <Route path="/people" component={People}/>

    </div>
  </Router>
)

export default App
