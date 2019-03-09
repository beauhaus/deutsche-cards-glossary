const vocabItemsReducerDefaultState = [];


const vocabItemsReducer = (state = vocabItemsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_VOCAB_ITEM':
        //    console.log("+Vreducer run!", [...state,action.vocabItem]);

            return [...state, action.vocabItem]
        case 'REMOVE_VOCAB_ITEM':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_VOCAB_ITEM':
            return state.map((vocabItem) => {
                if (vocabItem.id === action.id) {
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