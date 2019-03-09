import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import {editVocabItem, removeVocabItem} from '../reduxUtils/actions/vocabItems'
import VocabForm from './VocabForm';
import {addVocabItem} from '../reduxUtils/actions/vocabItems'

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
            <hr/>
            <VocabForm
            vocabItem = {props.vocabItem}
            onSubmit = {(vocabItem) => {
                console.log("updated\n", vocabItem)
                props.dispatch(editVocabItem(props.vocabItem.id, vocabItem));
                props.dispatch(addVocabItem(VocabItem))
                props.history.push('/vocabItemDashboard')
            }}
            />   
        </StyledEditVocabPage>
    )
}

const mapStateToProps = ((state, props) => {
    // console.log(`
    // props.match.params: 
    // `,
    // props.match.params)
    // state.vocabItems.find((item) => console.log("itemID\n", item.id))
    // state.vocabItems.find((item) => console.log("mpi\n", props.match.params.id)
    // )

    return { 
        vocabItem: state.vocabItems.find((vocabItem) => vocabItem.id ===props.match.params.id)
    }

})

export default connect(mapStateToProps)(EditVocabPage)