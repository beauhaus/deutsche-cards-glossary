export default (vocabItems, { text, sortBy, startDate, endDate }) => {
    
    return vocabItems.filter((vocabItem) => {

        const startDateMatch = typeof startDate !== 'number' || vocabItem.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || vocabItem.createdAt <= endDate;
        //CHECK IF ANY TEXT FIELD HAS SEARCH TERM (text value)
        
        const textMatch = vocabItem.word_de.toLowerCase().includes(text.toLowerCase())
            || vocabItem.word_en.toLowerCase().includes(text.toLowerCase())
            || vocabItem.example_de.toLowerCase().includes(text.toLowerCase())
            || vocabItem.example_en.toLowerCase().includes(text.toLowerCase())
            || vocabItem.note.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy ==='date') {
            return a.createdAt < b.createdAt ? 1: -1; // returns MOST RECENT vocab up top
        } else if(sortBy ==='difficulty') {
            return b.difficulty < a.difficulty ? 1: -1;
            // note a & b reversed-- so returns LEAST DIFFICULT vocab up top
        } else if(sortBy ==='isShowing') {
            // sets "true" to top
            return b.isShowing > a.isShowing ? 1: -1;
        }
    })
}