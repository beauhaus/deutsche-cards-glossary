import uuid from 'uuid';



// ADD VOCAB
export const addVocabItem = ({
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

export const removeVocabItem = ({ id } = {}) => ({
    type: 'REMOVE_VOCAB_ITEM',
    id
});

// EDIT VOCAB
export const editVocabItem = (id, updates) => ({
    type: 'EDIT_VOCAB_ITEM',
    id,
    updates
});