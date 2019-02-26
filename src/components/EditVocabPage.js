import React from 'react';
import styled from 'styled-components';
import VocabForm from './VocabForm';
import {connect} from 'react-redux'
import {editVocabItem} from '../actions/vocabItems'
// import { Link } from 'react-router-dom';
const StyledEditVocabPage = styled.div`
    width: 100vw;
    height: 100vh;
    grid-column: 1;
    grid-row: 2/-1;
    background: #55828b;
`;

// const EditVocabPage = ({ id, word_de, word_en, note,example_en, example_de, createdAt }) => {
const EditVocabPage = (props) => {
    console.log("EditVocabProps: ", props)
    return (
        <StyledEditVocabPage>
            <h1>style Edit vocab page</h1>
            <br />
            <p>editing the word with id of {props.match.params.id}</p>
            
            <VocabForm  
            vocabItem = {props.vocabItem}
            onSubmit = {(vocabItem) =>{
                // console.log("subbed VocabItem", vocabItem)
                // props.dispatch(editVocabItem(props.vocabItem.id, vocabItem))

            }}
            />
        </StyledEditVocabPage>
    )
}

const mapStateToProps = ((state, props) => {
    return { 
        vocabItem: state.vocabItems.find((vocabItem) => {
            return {
                vocabItem: state.vocabItems.find((vocabItem) => vocabItem.id ===props.match.params.id)
                    // console.log("st.vocabItem.id ",vocabItem.id )
                    // console.log("PropsMatchParams.id: ",props.match.params.id )
                    // return true;
                // })
            }
        })
        
    }
})

export default connect(mapStateToProps)(EditVocabPage)