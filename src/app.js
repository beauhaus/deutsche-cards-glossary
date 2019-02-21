import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {getLS, setLS} from './utils/utils';

import configureStore from './store/configureStore';
import {addVocabItem} from './actions/vocabItems';
import {setTextFilter} from './actions/filters';
import getVisibleVocab from './selectors/vocabSelectors';


import 'normalize.css/normalize.css'
import './styles/styles.scss'

import Routes from './Routing/Routes';

setLS();

const store = configureStore;

// console.log("store", store.getState())
// const db = getLS();
// store.dispatch(addVocabItem({"note": "Hello World"}))
// store.dispatch(addVocabItem({"word_en": "Hey, what's up?"}))

store.dispatch(addVocabItem({"word_en": "Brother", 'word_de':"Bruder", 'example_de':'Ich habe ein Bruder'}))
store.dispatch(addVocabItem({"word_en": "Sister", 'word_de':"Schwester", 'example_de':'Ich habe eine Schwester'}))
store.dispatch(setTextFilter("wes"))


setTimeout(() => {
    store.dispatch(setTextFilter("der"))
}, 3000);


const state = store.getState();
console.log("state: ", state)
console.log("s.filters ", state.filters)
// console.log("s.vocabItems ", state.vocabItems)
const visibleVocab= getVisibleVocab(state.vocabItems, state.filters);
// console.log("visVocab: ")
// console.table(visibleVocab)

// console.log("store: ", store)


// console.log(visibleVocab)
// store.dispatch(addVocabItem({
//     word_de: 'klug',
//     word_en: 'smart, clever',
//     example_de: 'Maria ist klug',
//     example_en: 'Maria is clever',
//     isShowing: 'true',
//     note: 'This is beginner vocabulary',
//     createdAt: 0
// })
// )

// console.log("addVocab", store.dispatch(addVocabItem(
//     {word_de: 'fertig',
//     word_en: 'complete',
//     example_de: 'Früstuch ist fertig.',
//     example_en: 'Breakfast is ready',
//     isShowing: '',
//     note: ''}
// )))
// ReactDOM.render(<Landing db={db}/>, document.getElementById('app'));

const JSX = () => (
    <Provider store={store}>
       <Routes/>
    </Provider>
)
ReactDOM.render(<JSX/>, document.getElementById('app'));