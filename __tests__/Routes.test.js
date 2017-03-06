import React from 'react';
import { shallow, mount, render } from 'enzyme'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Routes } from '../src/routes'
import { Menu } from '../src/components'
import { Home } from '../src/routes/Home'
import { About } from '../src/routes/About.jsx'

const routesWrapper = shallow(<Routes />)

describe('<Routes />', () => {
  it('should return something', () => {
    expect(Routes()).toBeDefined()
  })
  it('should have 1 div', () => {
    expect(routesWrapper.find('div')).toHaveLength(1)
  })
  it('should have element Menu and 2 Route', () => {
    expect(routesWrapper.containsAllMatchingElements([
      <Menu />,
      <Route />,
      <Route />
    ])).toBe(true)
  })
  it('should contains exactly like the following ', () => {
    expect(routesWrapper.contains(
      <Router>
        <div>
          <Menu />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    )).toBe(true)
  })
})
