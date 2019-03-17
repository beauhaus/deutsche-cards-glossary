import filtersReducer from '../../reduxUtils/reducers/filters'

test('should set up default filter values',() => {
    const state = filtersReducer(undefined, {type:`@@init`});
    expect(state).toEqual({
        text: '',
        sortBy: '',
        isShowing: true,
        difficulty: 10,
        startDate: null,
        endDate: null      
    })
})

test('should set sortby to difficulty', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_DIFFICULTY'});
    expect(state.sortBy).toBe('difficulty')
})

test('should set sortby to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'difficulty'
    };
    const action = {type: 'SORT_BY_DATE'};

    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
})

test('should set sortby to isShowing', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'difficulty'
    };
    const action = {type: 'SORT_BY_IS_SHOWING'};

    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('isShowing')
})


// 'should set text filter'

test('should set text filter', () => {
    const text = "textFilter";

    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text)
})