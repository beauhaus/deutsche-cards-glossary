import { createStore, combineReducers } from 'redux';
import vocabReducer from '../reducers/vocabItemsReducer'
import filtersReducer from '../reducers/filtersReducer'

// Create Store
const store = createStore(
    combineReducers({
        vocabItems: vocabReducer,
        filters: filtersReducer
    })
);

export default store;