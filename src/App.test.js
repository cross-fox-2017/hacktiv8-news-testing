import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import { BrowserRouter as Router } from 'react-router-dom'
import { Menu } from './components'
import { Routes } from './routes'

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should render Menu and Routes', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsAllMatchingElements([
      <Menu />,
      <Routes />
    ])).to.be.true
  })
})
