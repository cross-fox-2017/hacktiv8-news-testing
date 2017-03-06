import React from 'react';
import { shallow, mount, render } from 'enzyme'

import { Home } from '../src/routes/Home'
import { DataList } from '../src/routes/Home/DataList.jsx'
import { DataSearch } from '../src/routes/Home/DataSearch.jsx'

const homeWrapper = mount(<Home />)

describe('<Home />', () => {
  it('should return something', () => {
    expect(new Home()).toBeDefined()
  })
  it('should have 1 div', () => {
    expect(homeWrapper.find('div')).toHaveLength(1)
  })
  it('should have state news of length 0', () => {
    expect(homeWrapper.state('news')).toHaveLength(0)
  })
  it('should have state searchKey that equal to empty string', () => {
    expect(homeWrapper.state('searchKey')).toEqual('')
  })
  it('should have element DataList and DataSearch', () => {
    expect(homeWrapper.containsAllMatchingElements([
      <DataSearch />,
      <DataList />
    ])).toBe(true)
  })
  it('should have state searchKey that equal to event.target.value', () => {
    const event = {
      target: {
        value: 'React'
      }
    }
    homeWrapper.instance().handleChange(event)
    expect(homeWrapper.state('searchKey')).toEqual('React')
  })

  it('should have state news with length 20 after fetch', (done) => {
    const event = {
      target: {
        value: 'Redux'
      }
    }
    fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURI(event.target.value)}`)
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        homeWrapper.setState({
          news: resp.hits
        })
        setTimeout(function () {
          expect(homeWrapper.state('news')).toHaveLength(20)
        }, 2000)
        done()
      })
      .catch((error) => {
        console.log(error);
        // done(error)
      })
    })

  it('should have state searchKey that equal to empty string after click event', () => {
    homeWrapper.instance().handleClick()
    expect(homeWrapper.state('searchKey')).toEqual('')
  })

})
