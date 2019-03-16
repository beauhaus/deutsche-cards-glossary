import vocabSelectors from '../../reduxUtils/selectors/vocabSelectors'

const vocabItems = [
    {
        word_de: "Erinnerungen",
        word_en: "Memories",
        example_de: "es weckt Erinnerungen",
        example_en: "It awakens (brings back) memories",
        note: 'memory note',
        difficulty: 8,
        createdAt: 10000,
        isShowing: true
    },{
        word_de: "Ich sehne mich nach",
        word_en: "I long for/ I crave",
        example_de: "Ich sehne mich nach Glühwein",
        example_en: "I'm craving Glühwein",
        note: 'wine note',
        difficulty: 5,
        createdAt: 0,
        isShowing: true
    },{
        word_de: "Gedanken",
        word_en: "Thought",
        example_de: "Du hast meine Gedanken gelesen",
        example_en: "You've read my thoughts",
        note: 'thought note',
        difficulty: 8,
        createdAt: -10000,
        isShowing: false
    }
]

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

