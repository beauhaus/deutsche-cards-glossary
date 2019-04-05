import { createStore, combineReducers } from 'redux';

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

