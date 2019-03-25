import React from 'react';
import {shallow} from 'enzyme';
import FourOhFour from '../../Routing/FourOhFour'


test('should render dashboard correctly',() => {
    const wrapper = shallow(<FourOhFour/>)
    expect(wrapper).toMatchSnapshot();
})