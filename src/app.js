import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {getLS, setLS} from './utils/utils';

import configureStore from './reduxUtils/store/configureStore';
import {addVocabItem} from './reduxUtils/actions/vocabItems';
import {setTextFilter} from './reduxUtils/actions/filters';
import getVisibleVocabItems from './reduxUtils/selectors/vocabItems';


import 'normalize.css/normalize.css'
import './styles/styles.scss'

import Routes from './Routing/Routes';

// setLS();

const store = configureStore();

const vocabItemOne = store.dispatch(addVocabItem({
    word_de: "glücklich",
    word_en: "happy",
    example_de: 'Ich bin glücklich',
    example_en: 'I am happy',
    note: 'happy note',
    difficulty: 10,
    createdAt: 200,
    isShowing: true
}))
const vocabItemTwo = store.dispatch(addVocabItem({
    word_de: "müde",
    word_en: "tire",
    example_de: 'du bist müde',
    example_en: 'you are tired',
    note: 'tired note',
    difficulty: 3,
    createdAt: -200,
    isShowing: true
}))

store.dispatch(setTextFilter("müde"))

const state = store.getState();
const visibleVocabItems = getVisibleVocabItems(state.vocabItems, state.filters);
// console.log("state", state)
console.log("visibleVocabItems", visibleVocabItems)

const JSX = () => (
    <Provider store={store}>
       <Routes/>
    </Provider>
)
ReactDOM.render(<JSX/>, document.getElementById('app'));

