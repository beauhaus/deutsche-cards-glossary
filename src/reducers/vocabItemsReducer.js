
// VOCABITEMS REDUCER

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

export default vocabReducer;