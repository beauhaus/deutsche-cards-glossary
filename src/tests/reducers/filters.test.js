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

test('should set sortby to difficulty', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_DIFFICULTY'});
    expect(state.sortBy).toBe('difficulty')
})

