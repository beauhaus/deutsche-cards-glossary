import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ADD_VOCAB_ITEM
// REMOVE_VOCAB_ITEM
// SET_TEXT_FILTER
// IS_SHOWING_FILTER

// SORT_BY_DATE
// SET_START_DATE
// SET_END_DATE


// ADD VOCAB
const addVocabItem = ({
    word_de = '',
    word_en = '',
    example_de = '',
    example_en = '',
    isShowing = '',
    note = '',
    createdAt = 0 } = {}
) => ({
    type: 'ADD_VOCAB_ITEM',
    vocab: {
        "id": uuid(),
        word_de,
        word_en,
        example_de,
        example_en,
        isShowing,
        note,
        createdAt
    }
})

// REMOVE VOCAB

const removeVocabItem = ({ id } = {}) => ({
    type: 'REMOVE_VOCAB_ITEM',
    id
});

// EDIT VOCAB
const editVocabItem = (id, updates) => ({
    type: 'EDIT_VOCAB_ITEM',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const isShowingFilter = (isShowing = '') => ({
    type: 'IS_SHOWING_FILTER',
    isShowing
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


const vocabReducerDefaultState = [];

const vocabReducer = (state = vocabReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_VOCAB_ITEM':
            return [
                ...state,
                action.vocab
            ]
        case 'EDIT_VOCAB_ITEM':
            return state.map((vocab) => {
                if (vocab.id === action.id) {
                    return {
                        ...vocab,
                        ...action.updates
                    }
                } else {
                    return vocab;
                }
            })
        case 'REMOVE_VOCAB_ITEM':
            return state.filter(({ id }) => id !== action.id)
        default:
            return state;
    }
}

const filtersReducerDefaultState = {
    'text': '',
    'isShowing': '',
    'sortBy': 'date',
    'startDate': null,
    'endDate': null,
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'IS_SHOWING_FILTER':
            return {
                ...state,
                isShowing: action.isShowing
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}
// visible vocab 

const getVisibleVocab = (vocabItems, {text, isShowing, sortBy, startDate, endDate}) => {
    return vocabItems.filter((vocabItem)=>{
        const startDateMatch = typeof startDate !== 'number' || vocabItem.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || vocabItem.createdAt <= endDate;

        const loweredText = text.toLowerCase();
        const {word_de, word_en, example_de, example_en, note} = vocabItem;

        const textMatch = word_de.toLowerCase().includes(loweredText) ||
        word_en.toLowerCase().includes(loweredText)||
        example_de.toLowerCase().includes(loweredText)||
        example_en.toLowerCase().includes(loweredText)||
        note.toLowerCase().includes(loweredText);

        //if all of the below is true then the filter func will return true
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=> {
        if(sortBy ==="date")
        return a.createdAt < b.createdAt? 1: -1;
    });
}

// Create Store
const store = createStore(
    combineReducers({
        vocabItems: vocabReducer,
        filters: filtersReducer
    })
);


store.subscribe(() => {
    const state = store.getState();
    const visibleVocab = getVisibleVocab(state.vocabItems, state.filters)
    // const showStore = store.getState()
    console.log(visibleVocab)
})


/***********DISPATCH**************** */
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

const vocabOne= store.dispatch(addVocabItem({word_de:"Ak!", word_en: "Ugh!", createdAt: -2000}))
const vocabTwo= store.dispatch(addVocabItem({word_de:"FOO", word_en: "BAR!", createdAt: -4000, note: "WONDERFUL!"}))
// store.dispatch(removeVocabItem({id:vocabOne.vocab.id}))


// store.dispatch(editVocabItem(vocabTwo.vocab.id, {word_de: "erstellen", word_en: "create"})) 
// store.dispatch(setTextFilter('gh')) 
// store.dispatch(isShowingFilter(true))

// store.dispatch(sortByDate())

// store.dispatch(setStartDate(15))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())
// store.dispatch(setEndDate())


/*
const demoState = {
    vocabItems: [{
        "id": "09871340987",
        "word_de": "der/die/das",
        "word_en": "the",
        "example_de": "Der Sonnenaufgang ist wunderschön",
        "example_en": "The sunrise is beautiful",
        "isShowing": "true",
        "note": "comments/notes",
        "createdAt": 0
    }],
    filters: {
        'text': 'have',
        'sortBy': 'word_de',
        'startDate': undefined,
        'endDate': undefined
    }
}
*/
