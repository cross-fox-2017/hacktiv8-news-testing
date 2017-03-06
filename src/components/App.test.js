import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { shallow, mount } from 'enzyme'
import {NewsList} from './NewsList.js';
import {NewsForm} from './NewsForm.js';
import {People} from './People.js'
import {Routers} from '../App.js'
import {Routerer} from './Routerer.js'
describe('Testing news', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<App />)
  })
  it('should render InputArea and CulinaryList', () => {
    expect(wrapper.containsAllMatchingElements([
      <NewsForm />,
      <NewsList />
    ])).toBe(true)
  })

  it('state link should start with 2 list of news', () => {
    expect(wrapper.state('link')).toHaveLength(2)
  })

  it('state searchLink should start with empty string',() =>{
    expect(wrapper.state('searchLink')).toBe('')
  })

  it('triggered handleChange when InputArea submitted', () => {
    const event ={
      target:{
        value:'test'
      }
    }
    wrapper.instance().handleChange(event)
    expect(wrapper.state('searchLink')).toBe('test')
  })

})

describe('Testing people', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<People />)
  })
  it('state link should start with 0 list of people', () => {
    expect(wrapper.state('peoples')).toHaveLength(0)
  })


})

describe('Testing router', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Routers />)
  })
  it('should return router', () => {
    expect(wrapper.containsAllMatchingElements([
      <Routerer />
    ])).toBe(true)
  })

})
