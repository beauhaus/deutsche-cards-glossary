const vocabItemsReducerDefaultState = [];

const vocabItemsReducer = (state = vocabItemsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_VOCAB_ITEM':
            return [...state, action.vocabItem]
        case 'REMOVE_VOCAB_ITEM':
            return state.filter(({ _id }) => _id !== action._id)
        case 'EDIT_VOCAB_ITEM':
            return state.map((vocabItem) => {
                if (vocabItem._id === action._id) {
                    return {
                        ...vocabItem,
                        ...action.updates
                    }
                } else {
                    return vocabItem;
                }
            })
        default:
            return state;
    }
}

export default vocabItemsReducer;