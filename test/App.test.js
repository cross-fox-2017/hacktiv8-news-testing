import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { shallow, mount, render } from 'enzyme'
import { Menu } from '../src/components'
import { Routes } from '../src/routes'

const wrapper = shallow(<App />)

describe('<App />', () => {
  it('should render Menu and Routes', () => {
    expect(wrapper.containsAllMatchingElements([
      <Menu />,
      <Routes />
    ])).toBe(true)
  })
})
