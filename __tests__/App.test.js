import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { shallow, mount, render } from 'enzyme'

import App from '../src/App';
import logo from '../src/logo.svg'
import { Menu } from '../src/components'
import { Routes } from '../src/routes'

const appWrapper = mount(<App />)

describe('<App />', () => {
  it('should be defined', () => {
    expect(App()).toBeDefined()
  })
  it('should have div with length of 4', () => {
    expect(appWrapper.find('div')).toHaveLength(4)
  })
  it('should render Routes', () => {
    expect(appWrapper.containsAllMatchingElements([
      <Routes />
    ])).toBe(true)
  })
  it('should contains <App />', () => {
    expect(appWrapper.contains(
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h6>Hacktiv8 News and Peoples</h6>
        </div>
        <Routes />
      </div>
    )).toBe(true)
  })
})


/*
3 cara:
1. find('div').find(...).find(...)
2. https://www.codementor.io/pkodmad/dom-testing-react-application-jest-k4ll4f8sd
3. https://facebook.github.io/react/docs/test-utils.html
*/
