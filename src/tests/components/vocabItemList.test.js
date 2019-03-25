import React from 'react';
import {shallow} from 'enzyme';

import {VocabItemList} from '../../components/VocabItemList';
import vocabItems from '../fixtures/vocabItems';

test('should render vocabItems list with vocab items', () => {
    const wrapper = shallow(<VocabItemList vocabItems={vocabItems}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render message if no vocab items exist', () => {
    const wrapper = shallow(<VocabItemList vocabItems={[]}/>)
    expect(wrapper).toMatchSnapshot();
})