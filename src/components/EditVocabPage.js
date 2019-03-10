import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { editVocabItem, removeVocabItem } from '../reduxUtils/actions/vocabItems'
import VocabForm from './VocabForm';

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
            <h1>ID OF {props.match.params.id}</h1>
            <VocabForm
                vocabItem={props.vocabItem}
                onSubmit={(vocabItem) => {
                    props.dispatch(editVocabItem(props.vocabItem.id, vocabItem));
                    props.history.push('/vocabItemDashboard')
                }}
            />
            <button onClick={() => {
                props.dispatch(removeVocabItem({id: props.vocabItem.id}))
                props.history.push('/vocabItemDashboard')
            }}>
            </button>
        </StyledEditVocabPage>
    )
}

const mapStateToProps = ((state, props) => {
    return {
        vocabItem: state.vocabItems.find((vocabItem) => vocabItem.id === props.match.params.id)
    }
})

export default connect(mapStateToProps)(EditVocabPage)