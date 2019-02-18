import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ADD_VOCAB_ITEM
// REMOVE_VOCAB_ITEM
// SET_TEXT_FILTER
// SORT_BY_DATE
// FILTER_BY_SHOW_HIDE
// SET_START_DATE
// SET_END_DATE


// ADD VOCAB
const addVocabItem = ({
            word_de = '',
            word_en = '',
            example_de = '',
            example_en = '',
            show_switch = '',
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
        show_switch,
        note,
        createdAt
    }
})

// REMOVE VOCAB



const removeVocabItem = ({id}={}) =>({
    type: 'REMOVE_VOCAB_ITEM',
    id
});


const vocabReducerDefaultState = [];

const vocabReducer = (state = vocabReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_VOCAB_ITEM':
        return [
            ...state,
            action.vocab
        ]
        case 'REMOVE_VOCAB_ITEM':
        return state.filter(({id})=>id !== action.id)
        default:
            return state;
    }
}

// const REMOVE_VOCAB_ITEM = () => ({
//     type: 'REMOVE_VOCAB_ITEM',
//     vocab: {}
// })


// const SET_TEXT_FILTER = () => ({
//     type: 'SET_TEXT_FILTER',
//     vocab: {}
// })


// const SORT_BY_DATE = () => ({
//     type: 'SORT_BY_DATE',
//     vocab: {}
// })


// const FILTER_BY_SHOW_HIDE = () => ({
//     type: 'FILTER_BY_SHOW_HIDE',
//     vocab: {}
// })


// const SET_START_DATE = () => ({
//     type: 'SET_START_DATE',
//     vocab: {}
// })


// const SET_END_DATE = () => ({
//     type: 'SET_END_DATE',
//     vocab: {}
// })

const filtersReducerDefaultState = {
    'text': '',
    'sortBy': 'date',
    'startDate': undefined,
    'endDate': undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Create Store
const store = createStore(combineReducers({
    vocabItems: vocabReducer,
    filters: filtersReducer
}));


store.subscribe(() => {
    const showStore = store.getState()
    console.log(showStore)
})


/***********DISPATCH**************** */
store.dispatch(addVocabItem({
            word_de: 'klug',
            word_en: 'smart, clever',
            example_de: 'Maria ist klug',
            example_en: 'Maria is clever',
            show_switch: 'true',
            note: 'This is beginner vocabulary',
            createdAt: 0
    })
)

const vocabOne= store.dispatch(addVocabItem({word_de:"Ak!", word_en: "Ugh!"}))
const vocabTwo= store.dispatch(addVocabItem({word_de:"FOO", word_en: "BAR!"}))
store.dispatch(removeVocabItem({id:vocabOne.vocab.id}))



/*
const demoState = {
    vocabItems: [{
        "id": "09871340987",
        "word_de": "der/die/das",
        "word_en": "the",
        "example_de": "Der Sonnenaufgang ist wunderschön",
        "example_en": "The sunrise is beautiful",
        "show_switch": "true",
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