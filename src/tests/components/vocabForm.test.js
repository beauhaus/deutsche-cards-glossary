import React from 'react';
import {shallow} from 'enzyme';
import VocabForm from '../../components/VocabForm';
import VocabItems from '../fixtures/vocabItems';


test('renders expense form properly', () => {
    const wrapper = shallow(<VocabForm/>);
    expect(wrapper).toMatchSnapshot()
})

test('should render VocabForm with VocabForm Data', () => {
    const wrapper = shallow(<VocabForm vocabItem={VocabItems[1]}/>);
    expect(wrapper).toMatchSnapshot()

})