import React from 'react';
import {shallow} from 'enzyme';

import VocabForm from '../components/VocabForm';

test('renders expense form properly', () => {
    const wrapper = shallow(<VocabForm/>);

    expect(wrapper).toMatchSnapshot()
})