import React from 'react';
import { shallow } from 'enzyme';
import AddVocabPage from '../../components/AddVocabPage';

test('should render addVocab page correctly',() => {
    const addVocabItem= jest.fn();
    const history= {push: jest.fn()};
    const wrapper = shallow(<AddVocabPage addVocabItem={addVocabItem} history={history}/>);

    expect(wrapper).toMatchSnapshot()
})