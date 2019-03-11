import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByDifficulty} from '../../reduxUtils/actions/filters';


test('should generate setStartDate action filter', () =>{
    const action = setStartDate(new Date(0))

    expect(action).toEqual(
        {
            type: 'SET_START_DATE',
            startDate: new Date(0)
        }
    )
})

test('should generate setEndDate action filter', () =>{
    const action = setEndDate(new Date(0))

    expect(action).toEqual(
        {
            type: 'SET_END_DATE',
            endDate: new Date(0)
        }
    )
})

test('should generate setTextFilter filter with text value', () =>{
    const action = setTextFilter("some text")

    expect(action).toEqual(
        {
            type: 'SET_TEXT_FILTER',
            text: "some text"
        }
    )
})

test('should generate setTextFilter filter OBJECT with default (empty string)', () =>{
    const action = setTextFilter()

    expect(action).toEqual(
        {
            type: 'SET_TEXT_FILTER',
            text: ""
        }
    )
})

test('should generate action sort by difficulty', () => {
    const action = sortByDifficulty()
    expect(action).toEqual({type:"SORT_BY_DIFFICULTY"})
})


test('should generate action sort by difficulty', () => {
    const action = sortByDate()
    expect(action).toEqual({type:"SORT_BY_DATE"})
})

