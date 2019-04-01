import moment from 'moment'

const vocabItems = [
    {
        id: 1,
        word_de: "Erinnerungen",
        word_en: "Memories",
        example_de: "es weckt Erinnerungen",
        example_en: "It awakens (brings back) memories",
        note: 'memory note',
        difficulty: "8",
        createdAt: moment(10000),
        isShowing: true
    },{
        id: 2,
        word_de: "Ich sehne mich nach",
        word_en: "I long for/ I crave",
        example_de: "Ich sehne mich nach Glühwein",
        example_en: "I'm craving Glühwein",
        note: 'wine note',
        difficulty: 5,
        createdAt: 0,
        isShowing: true
    },{
        id: 3,
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
export default vocabItems;