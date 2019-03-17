import vocabSelectors from '../../reduxUtils/selectors/vocabSelectors'
import vocabItems from '../fixtures/vocabItems'

test('should filter by text value', ()=> {
    const filters = {
        text: "ü",
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = vocabSelectors(vocabItems, filters)
    expect(result).toEqual([vocabItems[1]])
})

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date'
    }
    const result = vocabSelectors(vocabItems, filters)
    expect(result).toEqual([vocabItems[0],vocabItems[1], vocabItems[2]])
})

