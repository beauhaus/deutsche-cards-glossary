import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {getLS, setLS} from './utils/utils';

import configureStore from './reduxUtils/store/configureStore';
import {addVocabItem} from './reduxUtils/actions/vocabItems';
// import {setTextFilter} from './reduxUtils/actions/filters';
import getVisibleVocabItems from './reduxUtils/selectors/vocabSelectors';


import 'normalize.css/normalize.css'
import './styles/styles.scss'

import Routes from './Routing/Routes';
import db from './data/db.json';

const store = configureStore();

db.map(item => store.dispatch(addVocabItem(item)))

const state = store.getState();
const visibleVocabItems = getVisibleVocabItems(state.vocabItems, state.filters);

// console.log("Store: ", store)
const JSX = () => (
    <Provider store={store}>
       <Routes/>
    </Provider>
)
ReactDOM.render(<JSX/>, document.getElementById('app'));