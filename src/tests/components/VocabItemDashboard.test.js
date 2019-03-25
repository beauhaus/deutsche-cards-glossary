import React from 'react';
import {shallow} from 'enzyme';
import VocabItemDashboard from '../../components/VocabItemDashboard'


test('should render dashboard correctly',() => {
    const wrapper = shallow(<VocabItemDashboard/>)
    expect(wrapper).toMatchSnapshot();
})