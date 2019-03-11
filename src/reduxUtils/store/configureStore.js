import { createStore, combineReducers } from 'redux';
import vocabItemsReducer from '../reducers/vocabItems';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers(
        {
            vocabItems: vocabItemsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}
