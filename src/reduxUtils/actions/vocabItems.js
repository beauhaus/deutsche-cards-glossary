import uuid from 'uuid';

export const addVocabItem = (
    { word_de = '', 
    word_en = '', 
    note = '', 
    difficulty = 0, 
    isShowing = true, 
    example_de = '', 
    example_en = '', 
    createdAt = 0 } = {}
    ) => {
     return   {
    type: 'ADD_VOCAB_ITEM',
    vocabItem: {
        id: uuid(),
        word_de,
        word_en,
        note,
        example_de,
        example_en,
        difficulty,
        createdAt,
        isShowing
    }
}}

export const removeVocabItem = ({ id } = {}) => ({
    type: 'REMOVE_VOCAB_ITEM',
    id
})

export const editVocabItem = (id, updates) => ({
    type: 'EDIT_VOCAB_ITEM',
    id,
    updates
})