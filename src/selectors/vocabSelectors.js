
// VOCABITEMS SELECTOR

const getVisibleVocab = (vocabItems, {text, isShowing, sortBy, startDate, endDate}) => {
    return vocabItems.filter((vocabItem)=>{
        const startDateMatch = typeof startDate !== 'number' || vocabItem.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || vocabItem.createdAt <= endDate;

        const loweredText = text.toLowerCase();
        const {word_de, word_en, example_de, example_en, note} = vocabItem;

        const textMatch = word_de.toLowerCase().includes(loweredText) ||
        word_en.toLowerCase().includes(loweredText)||
        example_de.toLowerCase().includes(loweredText)||
        example_en.toLowerCase().includes(loweredText)||
        note.toLowerCase().includes(loweredText);

        //if all of the below is true then the filter func will return true
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=> {
        if(sortBy ==="date")
        return a.createdAt < b.createdAt? 1: -1;
    });
}

export default getVisibleVocab;