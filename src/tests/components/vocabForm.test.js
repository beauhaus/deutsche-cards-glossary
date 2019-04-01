import React from 'react';
import { shallow } from 'enzyme';
import VocabForm from '../../components/VocabForm';
import VocabItems from '../fixtures/vocabItems';
import { wrap } from 'module';


test('renders expense form properly', () => {
    const wrapper = shallow(<VocabForm />);
    expect(wrapper).toMatchSnapshot()
})

test('should render VocabForm with VocabForm Data', () => {
    const wrapper = shallow(<VocabForm vocabItem={VocabItems[1]} />);
    expect(wrapper).toMatchSnapshot()
})

test('should render Error with vocabform for invalid submission', () => {
    const wrapper = shallow(<VocabForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should set German word (word_de) on input change', () => {
    const value = 'NewGermanWord';
    const wrapper = shallow(<VocabForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('word_de')).toBe(value)
})

test('should set English word (word_en) on input change', () => {
    const value = 'NewEnglishWord';
    const wrapper = shallow(<VocabForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('word_en')).toBe(value)
})

test('should set German Sentence (example_de) on input change', () => {
    const value = 'German Sentence Example';
    const wrapper = shallow(<VocabForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('example_de')).toBe(value)
})

test('should set English Sentence (example_en) on input change', () => {
    const value = 'English Sentence Example';
    const wrapper = shallow(<VocabForm />);
    wrapper.find('input').at(3).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('example_en')).toBe(value)
})

test('should set difficulty (1-10) on input change', () => {
    const value = '7';
    const wrapper = shallow(<VocabForm />);
    wrapper.find('input').at(4).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('difficulty')).toBe(value)
})


test('should set difficulty (1-10) on input change', () => {
    const value = '7';
    const wrapper = shallow(<VocabForm />);
    wrapper.find('input').at(4).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('difficulty')).toBe(value)
})

test('should set isShowing on input change', () => {
    const value = false;
    const wrapper = shallow(<VocabForm />);
    wrapper.find('input').at(5).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('isShowing')).toBe(value)
})

test('should show not on text area change', () => {
    const value = "New Note value";
    const wrapper = shallow(<VocabForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})


