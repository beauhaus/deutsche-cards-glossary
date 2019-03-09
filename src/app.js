import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {getLS, setLS} from './utils/utils';

import configureStore from './reduxUtils/store/configureStore';
import {addVocabItem} from './reduxUtils/actions/vocabItems';
import {setTextFilter} from './reduxUtils/actions/filters';
import getVisibleVocabItems from './reduxUtils/selectors/vocabSelectors';


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
    isShowing: false
}))
const vocabItemTwo = store.dispatch(addVocabItem({
    word_de: "müde",
    word_en: "tired",
    example_de: 'du bist müde',
    example_en: 'you are tired',
    note: 'tired note',
    difficulty: 3,
    createdAt: -200,
    isShowing: true
}))
const vocabItemThree = store.dispatch(addVocabItem({
    word_de: "verstärken",
    word_en: "strengthen",
    example_de: 'Wir müssen die Wände verstärken.',
    example_en: 'We must strengthen the walls',
    note: 'strengthen note',
    difficulty: 8,
    createdAt: -900,
    isShowing: false
}))


const state = store.getState();
const visibleVocabItems = getVisibleVocabItems(state.vocabItems, state.filters);
console.log("visibleVocabItems", visibleVocabItems)
console.log("Store: ", store)
const JSX = () => (
    <Provider store={store}>
       <Routes/>
    </Provider>
)
ReactDOM.render(<JSX/>, document.getElementById('app'));

