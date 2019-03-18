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

test('should ADD a vocabItem', () => {
    const vocabItem = {
        word_de: "Deutchland",
        word_en: "Germany",
        example_de: "Ich vermisse Deutschland",
        example_en: "I miss Germany",
        note: 'Germany Note',
        difficulty: 2,
        createdAt: 0,
        isShowing: true
    }
    const action = {
        type: 'ADD_VOCAB_ITEM', 
        vocabItem
    };
    const state = vocabItemsReducer(vocabItems, action);
    
    expect(state).toEqual([...vocabItems, vocabItem])
})

test('should EDIT a vocabItem', () => {
    const difficulty = 9;
    const vocabItem = {
        word_de: "Deutchland",
        word_en: "Germany",
        example_de: "Ich vermisse Deutschland",
        example_en: "I miss Germany",
        note: 'Germany Note',
        difficulty: 2,
        createdAt: 0,
        isShowing: true
    }
    const action = {
        type: 'EDIT_VOCAB_ITEM',
        id: vocabItems[1].id,
        updates: {
            difficulty
        }
    };
    const state = vocabItemsReducer(vocabItems, action);
    
    expect(state[1].difficulty).toBe(difficulty)
})

test('should NOT EDIT a vocabItem if ID not found', () => {
    const difficulty = 9;
    const vocabItem = {
        word_de: "Deutchland",
        word_en: "Germany",
        example_de: "Ich vermisse Deutschland",
        example_en: "I miss Germany",
        note: 'Germany Note',
        difficulty: 2,
        createdAt: 0,
        isShowing: true
    }
    const action = {
        type: 'EDIT_VOCAB_ITEM',
        id: '-1',
        updates: {
            difficulty
        }
    };
    const state = vocabItemsReducer(vocabItems, action);
    
    expect(state).toEqual(vocabItems)
})
