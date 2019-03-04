import uuid from 'uuid';

export const addVocabItem = ({ word_de = '', word_en = '', note = '', difficulty = 10, isShowing = true, example_de = '', example_en = '', createdAt = 0 } = {}) => ({
    type: 'ADD_VOCAB_ITEM',
    vocabItem: {
        _id: uuid(),
        word_de,
        word_en,
        note,
        example_de,
        example_en,
        difficulty,
        createdAt,
        isShowing
    }
})

export const removeVocabItem = ({ _id } = {}) => ({
    type: 'REMOVE_VOCAB_ITEM',
    _id
})

export const editVocabItem = (_id, updates) => ({
    type: 'EDIT_VOCAB_ITEM',
    _id,
    updates
})