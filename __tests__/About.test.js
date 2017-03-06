import React from 'react';
import { shallow, mount, render } from 'enzyme'

import { About } from '../src/routes/About'

const aboutWrapper = mount(<About />)

describe('<About />', () => {
  it('should render correctly', () => {
    expect(new About()).toBeDefined()
  })
  it('should have div with length of 1', () => {
    expect(aboutWrapper.find('div')).toHaveLength(1)
  })
  it('should have state peoples of length 0', () => {
    expect(aboutWrapper.state('peoples')).toHaveLength(0)
  })
  it('should have state peoples of length 10', (done) => {
    fetch('https://swapi.co/api/people/?page=1')
      .then(response => {
        return response.json()
      })
      .then(people => {
        aboutWrapper.setState({
          peoples: people.results
        })
        expect(aboutWrapper.state('peoples')).toHaveLength(10)
        done()
      })
      .catch((error) => {
        console.log(error);
        done(error)
      })
  })
})
