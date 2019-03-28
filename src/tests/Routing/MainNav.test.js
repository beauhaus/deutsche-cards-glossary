//react-test-renderer
import React from 'react';
import {shallow} from 'enzyme';
import MainNav from '../../Routing/MainNav'

/****** ENZYME METHODS FOR SHALLOW RENDER: ******
https://airbnb.io/enzyme/docs/api/shallow.html
************************************************/

test('should render routes correctly',() => {
    const wrapper = shallow(<MainNav/>)
    expect(wrapper).toMatchSnapshot();
})