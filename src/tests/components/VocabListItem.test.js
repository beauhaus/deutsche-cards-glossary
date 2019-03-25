import React from 'react';
import {shallow} from 'enzyme';
import vocabItems from '../fixtures/vocabItems';

import VocabListItem from '../../components/VocabListItem';

test('should render vocab list item correctly', () => {
    const wrapper = shallow(<VocabListItem {...vocabItems[0]}/>)
    expect(wrapper).toMatchSnapshot();
})
