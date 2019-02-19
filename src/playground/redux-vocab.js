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

// EDIT VOCAB
const editVocabItem = (id, updates) =>({
    type: 'EDIT_VOCAB_ITEM',
    id,
    updates
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
        return state.map((vocab)=>{
            if(vocab.id === action.id) {
                return {
                    ...vocab,
                    ...action.updates
                }
            } else {
                return vocab;
            }
        })
        case 'REMOVE_VOCAB_ITEM':
        return state.filter(({id})=>id !== action.id)
        default:
            return state;
    }
}

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


store.dispatch(editVocabItem(vocabTwo.vocab.id, {word_de: "erstellen", word_en: "create"})) 
//2nd arg is updates to object



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
