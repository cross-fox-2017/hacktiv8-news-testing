import React from 'react';
import { shallow, mount, render } from 'enzyme'

import { About } from '../src/routes/About'

const aboutWrapper = mount(<About />)

describe('<About />', () => {
  it('should return something', () => {
    expect(new About()).toBeDefined()
  })
  it('should have 1 div', () => {
    expect(aboutWrapper.find('div')).toHaveLength(1)
  })
  it('should have state peoples with length 0', () => {
    expect(aboutWrapper.state('peoples')).toHaveLength(0)
  })
  it('should have state peoples with length 10 after fetch', (done) => {
    fetch('https://swapi.co/api/people/?page=1')
      .then(response => {
        return response.json()
      })
      .then(people => {
        aboutWrapper.setState({
          peoples: people.results
        })
        setTimeout(function () {
          expect(aboutWrapper.state('peoples')).toHaveLength(10)
        }, 3000)
        done()
      })
      .catch((error) => {
        console.log(error);
        // done(error)
      })
  })
})
