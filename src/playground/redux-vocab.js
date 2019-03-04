import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_VOCAB_ITEM
// REMOVE_WORD
// EDIT_WORD
// SET_TEXT_FILTER
// IS_SHOWING_FILTER
// SORT_BY_DATE
// SORT_BY_DIFFICULTY

const addVocabItem = ({ word_de='', word_en='', note='', isShowing=true, example_de='', example_en='', createdAt=0}={}) => ({
    type: 'ADD_VOCAB_ITEM',
    vocabItem: {
        _id: uuid(),
        word_de,
        word_en,
        note,
        example_de,
        example_en,
        createdAt,
        isShowing
    }    
})

const removeVocabItem = ({_id}={}) => ({
    type: 'REMOVE_VOCAB_ITEM',
    _id
})

const editVocabItem = (_id, updates) =>({
    type: 'EDIT_VOCAB_ITEM',
    _id,
    updates 
})

const setTextFilter = (text='') =>({
    type: 'SET_TEXT_FILTER',
    text
})


const vocabItemsReducerDefaultState = [];

const vocabItemsReducer = (state=vocabItemsReducerDefaultState, action) => {
switch (action.type) {   
    case 'ADD_VOCAB_ITEM':
    return [...state, action.vocabItem]
    case 'REMOVE_VOCAB_ITEM':
    return state.filter(({_id})=> _id !== action._id)
    case 'EDIT_VOCAB_ITEM':
    return state.map((vocabItem)=>{
        if(vocabItem._id === action._id) {
            return {
                ...vocabItem,
                ...action.updates
            }
        } else {
            return vocabItem;
        }
    })
    default: 
       return state;
  }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount changeable via UI
    isShowing: true, //boolean 
    startDate: null, //changeable via UI
    endDate: null  // changeable via UI
};

const filtersReducer = (state=filtersReducerDefaultState, action) => {
    switch (action.type) {   
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        }
        default: 
           return state;
      }
    }
    
// store creation

const store = createStore(combineReducers(
  {
    vocabItems: vocabItemsReducer,
    filters: filtersReducer
  }    
));

store.subscribe(() =>{
    console.log(store.getState())
})

/*****************************************/
/*************DISPATCHING*****************/
/*****************************************/
const vocabItemOne = store.dispatch(addVocabItem({
    word_de:"glücklich",
    word_en:"happy",
    example_de:'Ich bin glücklich',
    example_en: 'I am happy',
    note: 'happy note',
    createdAt: 0,
    isShowing: true
}))
const vocabItemTwo = store.dispatch(addVocabItem({
    word_de:"müde",
    word_en:"tire",
    example_de:'du bist müde',
    example_en: 'you are tired',
    note: 'tired note',
    createdAt: 0,
    isShowing: true
}))
const vocabItemThree = store.dispatch(addVocabItem({
    word_de:"zehn",
    word_en:"ten",
    example_de:'es ist zehn Uhr',
    example_en: "It's ten O'Clock",
    note: "Ten O'Clock note",
    createdAt: 0,
    isShowing: true
}))

// store.dispatch(removeVocabItem({_id: vocabItemOne.vocabItem._id}))
store.dispatch(editVocabItem(vocabItemOne.vocabItem._id, {note: 'HAPPY NOTE'}))
store.dispatch(setTextFilter('happy'))


/****************FINAL STATE**************/

// const demoState= {
//     vocabItems:[{  // vocabItems = "expenses" 
//         id: 'lkjasdf',
//         word_de: '',
//         word_en: '',
//         example_de: '',
//         example_en: '',
//         note: '',
//         createdAt: 0,
//         isShowing: true
//     }],
//     filters: {
//         text: 'one',
//         sortBy: '', // date or amount
//         isShowing: false, //boolean
//         startDate: null,
//         endDate: null
    
//     }
// }

/*ACTION GENERATORS=> functions that return ACTION OBJECTS*/
