import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';

// ADD_VOCAB_ITEM
// REMOVE_WORD
// EDIT_WORD
// SET_TEXT_FILTER
// SORT_BY_DIFFICULTY
// IS_SHOWING_FILTER
// SORT_BY_DATE

/*******************************************************/
/************* ACTION GENERATOR FUNCTIONS **************/
/*******************************************************/
// const addVocabItem = ({ word_de = '', word_en = '', note = '', difficulty = 10, isShowing = true, example_de = '', example_en = '', createdAt = 0 } = {}) => ({
//     type: 'ADD_VOCAB_ITEM',
//     vocabItem: {
//         _id: uuid(),
//         word_de,
//         word_en,
//         note,
//         example_de,
//         example_en,
//         difficulty,
//         createdAt,
//         isShowing
//     }
// })

// const removeVocabItem = ({ _id } = {}) => ({
//     type: 'REMOVE_VOCAB_ITEM',
//     _id
// })

// const editVocabItem = (_id, updates) => ({
//     type: 'EDIT_VOCAB_ITEM',
//     _id,
//     updates
// })

// const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
// })

// /******************SORTING****************/
// const sortByDifficulty = () => ({   //instead of sort by amount
//     type: 'SORT_BY_DIFFICULTY'
// })

// const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
// })

// const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
// })

// const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
// })

// const vocabItemsReducerDefaultState = [];

// const vocabItemsReducer = (state = vocabItemsReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_VOCAB_ITEM':
//             return [...state, action.vocabItem]
//         case 'REMOVE_VOCAB_ITEM':
//             return state.filter(({ _id }) => _id !== action._id)
//         case 'EDIT_VOCAB_ITEM':
//             return state.map((vocabItem) => {
//                 if (vocabItem._id === action._id) {
//                     return {
//                         ...vocabItem,
//                         ...action.updates
//                     }
//                 } else {
//                     return vocabItem;
//                 }
//             })
//         default:
//             return state;
//     }
// }

// const filtersReducerDefaultState = {
//     text: '',
//     sortBy: null, // date or amount changeable via UI
//     isShowing: true, //boolean 
//     difficulty: 10, // 1-10 
//     startDate: null, //changeable via UI
//     endDate: null  // changeable via UI
// };

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT_FILTER':
//             return {
//                 ...state,
//                 text: action.text
//             }
//         case 'SORT_BY_DIFFICULTY':
//             return {
//                 ...state,
//                 sortBy: 'difficulty'
//             }
//         case 'SORT_BY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             }
//         case 'SET_START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             }
//         case 'SET_END_DATE':
//             return {
//                 ...state,
//                 endDate: action.endDate
//             }
//         default:
//             return state;
//     }
// }
// GET VISIBLE VOCABITEMS
// const dateTypeUtil = (input) => (
//     console.table(input)
// )

// const getVisibleVocabItems = (vocabItems, { text, sortBy, startDate, endDate }) => {
//     // var startDateType = typeof startDate;
//     // var endDateType = typeof endDate;
//     const noSortMsg = "Not sorting";
//     const sortingMsg = `Sorting by ${sortBy}`
//     console.log(sortBy?sortingMsg:noSortMsg)
    
//     return vocabItems.filter((vocabItem) => {
//         //Sanity Check for types/vals
//         // dateTypeUtil({ startDate, startDateType, endDate, endDateType })

//         const startDateMatch = typeof startDate !== 'number' || vocabItem.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || vocabItem.createdAt <= endDate;
//         //CHECK IF ANY TEXT FIELD HAS SEARCH TERM (text value)
//         const textMatch = vocabItem.word_de.toLowerCase().includes(text.toLowerCase())
//             || vocabItem.word_en.toLowerCase().includes(text.toLowerCase())
//             || vocabItem.example_de.toLowerCase().includes(text.toLowerCase())
//             || vocabItem.example_en.toLowerCase().includes(text.toLowerCase())
//             || vocabItem.note.toLowerCase().includes(text.toLowerCase());
//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a,b) => {
//         // console.log(sortBy?"":"not sorting")
//         if(sortBy ==='date') {
//             return a.createdAt < b.createdAt ? 1: -1; // Most recent vocab up top
//         }
//         if(sortBy ==='difficulty') {
//             // TODO: note a & b reversed-- // LEAST DIFFICULT vocab up top
//             return b.difficulty < a.difficulty ? 1: -1;
//         }
//     })

// }
// store creation

// const store = createStore(combineReducers(
//     {
//         vocabItems: vocabItemsReducer,
//         filters: filtersReducer
//     }
// ));

store.subscribe(() => {
    const state = store.getState();
    const visibleVocabItems = getVisibleVocabItems(state.vocabItems, state.filters);
    console.log(visibleVocabItems)
})

/*****************************************/
/*************DISPATCHING*****************/
/*****************************************/
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

const vocabItemThree = store.dispatch(addVocabItem({
    word_de: "zehn",
    word_en: "ten",
    example_de: 'es ist zehn Uhr',
    example_en: "It's ten O'Clock",
    note: "Ten O'Clock note",
    difficulty: 8,
    createdAt: 0,
    isShowing: true
}))

// store.dispatch(removeVocabItem({_id: vocabItemOne.vocabItem._id}))
// store.dispatch(editVocabItem(vocabItemOne.vocabItem._id, { note: 'HAPPY NOTE' }))
// store.dispatch(setTextFilter('ten'))
// store.dispatch(sortByDifficulty())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(40))
// store.dispatch(setEndDate(215))



/****************FINAL STATE**************/

// const demoState= {
//     vocabItems:[{  // vocabItems = "expenses" 
//         id: 'lkjasdf',
//         word_de: '',
//         word_en: '',
//         example_de: '',
//         example_en: '',
//         note: '',
//         difficulty: 9,
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
