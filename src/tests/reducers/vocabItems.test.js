//vocabItems reducer tests

import vocabItemsReducer from '../../reduxUtils/reducers/vocabItems';
import vocabItems from '../fixtures/vocabItems';

test('should set default state', () => {
    const state = vocabItemsReducer(undefined, {type:'@@iINIT'})
    expect(state).toEqual([])
})

test('should remove vocabItem by ID', () => {
    // console.log("vocItems[1].id: ", vocabItems[1].id)
    const action = {
        type: 'REMOVE_VOCAB_ITEM', 
        id: vocabItems[0].id
    };
    const state = vocabItemsReducer(vocabItems, action);
    
    expect(state).toEqual([vocabItems[1], vocabItems[2]])
})
test('should NOT remove vocabItem if ID not found', () => {
    // console.log("vocItems[1].id: ", vocabItems[1].id)
    const action = {
        type: 'REMOVE_VOCAB_ITEM', 
        id: -1
    };
    const state = vocabItemsReducer(vocabItems, action);
    
    expect(state).toEqual(vocabItems)
})