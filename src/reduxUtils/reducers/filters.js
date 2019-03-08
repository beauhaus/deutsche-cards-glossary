const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount changeable via UI
    isShowing: true, //boolean 
    difficulty: 10, // 1-10 
    startDate: -50000, //changeable via UI
    endDate: 550000  // changeable via UI
};


const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DIFFICULTY':
            return {
                ...state,
                sortBy: 'difficulty'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}
export default filtersReducer;