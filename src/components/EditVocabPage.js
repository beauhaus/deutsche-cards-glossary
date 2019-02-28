import React from 'react';
import styled from 'styled-components';
import {editVocabItem} from '../actions/vocabItems'
import VocabForm from './VocabForm';

import {connect} from 'react-redux'
const StyledEditVocabPage = styled.div`
    width: 100vw;
    height: 100vh;
    grid-column: 1;
    grid-row: 2/-1;
    background: #55828b;
`;

const EditVocabPage = (props) => {
    console.log("EditVocabProps: ", props)
    return (
        <StyledEditVocabPage>
            <p>EDIT word with ID: {props.match.params.id}</p>            
        </StyledEditVocabPage>
    )
}

const mapStateToProps = ((state, props) => {
    return { 
        vocabItem: state.vocabItems.find((item) => item.id ===props.match.params.id)
    }
})

export default connect(mapStateToProps)(EditVocabPage)