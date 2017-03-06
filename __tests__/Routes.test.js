import React from 'react';
import { mount } from 'enzyme'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Routes } from '../src/routes'
import { Menu } from '../src/components'
import { Home } from '../src/routes/Home'
import { About } from '../src/routes/About.jsx'

const routesWrapper = mount(<Routes />)

describe('<Routes />', () => {
  it('should be defined', () => {
    expect(Routes()).toBeDefined()
  })
  it('should have div with length of 2', () => {
    expect(routesWrapper.find('div')).toHaveLength(2)
  })
  it('should render Menu and 2 Routes', () => {
    expect(routesWrapper.containsAllMatchingElements([
      <Menu />,
      <Route />,
      <Route />
    ])).toBe(true)
  })
  it('should contains <Routes /> ', () => {
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
