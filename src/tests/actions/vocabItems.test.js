import {addVocabItem, removeVocabItem, editVocabItem} from '../../reduxUtils/actions/vocabItems';


test('should setup removeVocabItem action object', () =>{
    const action = removeVocabItem({id: '12345abc'})
    expect(action).toEqual(
        {
            type: "REMOVE_VOCAB_ITEM",
            id: "12345abc"
        }
    )
})

test('should setup editVocabItem action object', () =>{
    const action = editVocabItem("12345abc", {note: 'This is a new note'})
    expect(action).toEqual(
        {
            type: "EDIT_VOCAB_ITEM",
            id: "12345abc",
            updates: {note: "This is a new note"}
        }
    )
})

test('should setup addVocabItem action object with provided values', () =>{
    const vocabItemData = {
        word_de: 'nein', 
        word_en: 'no', 
        note: 'note for the new word', 
        difficulty: 6, 
        isShowing: true, 
        example_de: 'Nien, danke.', 
        example_en: 'No thanks', 
        createdAt: 994520030
    }
    const action = addVocabItem(vocabItemData)

    // Here we use expect.any() (we don't care what the value is, just so long as it is the right type)
    expect(action).toEqual(
        {
            type: "ADD_VOCAB_ITEM",
            vocabItem: {
                ...vocabItemData,
                id: expect.any(String)
            }
        }
    )
})

/* WHAT HAPPENS IF WE PASS NOTHING INTO addVocabItem action generator??? */
test('should setup addVocabItem action object with DEFAULT values', () =>{
    const vocabItemData = {

    }    
    const action = addVocabItem() //NO ARGUMENTS!
    expect(action).toEqual(
        {
            type: "ADD_VOCAB_ITEM",
            vocabItem: {
                id: expect.any(String),
                // next... default values
                
                    word_de: '', 
                    word_en: '', 
                    note: '', 
                    difficulty: 0, 
                    isShowing: true, 
                    example_de: '', 
                    example_en: '', 
                    createdAt: 0 
            }
        }
    )
})

