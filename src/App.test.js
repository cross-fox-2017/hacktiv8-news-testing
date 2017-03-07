import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import {Link} from 'react-router-dom'
import App from './App';
import People from './components/People/People'
import News from './components/News/News'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe('test the envi', function() {
  it('work, hopefully', () =>{
    expect(true).toBe(true)
  })
});

describe('<App />', () => {
  let wrapper = mount(<App />)
  it('Should render', () => {
    expect(wrapper.containsAllMatchingElements([
      <Route />,
      <Route />
    ])).toBe(true)
  })
});

describe('<People />', () => {
  let wrapper = shallow(<People />)
  it('should start with empty list', () => {
    expect(wrapper.state('peopleList')).toHaveLength(0)
  })
});

describe('<News />', () => {
  let wrapper = shallow(<News />)
  it('should start with empty list', () => {
    expect(wrapper.state('keyword')).toHaveLength(0)
  })

  it('check search', () => {
    const event = {
      target: {
        value: 'React'
      }
    }
    wrapper.instance().searchTitle(event)
    expect(wrapper.state('keyword')).toBe('React')
  })
})

// describe('<People />', function() {
//   test('the data is peanut butter', () => {
//     return componentDidMount().then((data) => {
//       expect(data).toBe('peanut butter');
//     })
//   })
// })
