import React from 'react';
import { shallow } from 'enzyme';

import { Menu } from '../src/components/Menu';

describe('<Menu />', () => {
  it('should have 2 links', () => {
    const menuWrapper = shallow(<Menu />);
    expect(menuWrapper.find('Link')).toHaveLength(2);
  });
});
