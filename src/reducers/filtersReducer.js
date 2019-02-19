


//FILTERS REDUCER

const filtersReducerDefaultState = {
    'text': '',
    'isShowing': '',
    'sortBy': 'date',
    'startDate': null,
    'endDate': null,
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'IS_SHOWING_FILTER':
            return {
                ...state,
                isShowing: action.isShowing
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