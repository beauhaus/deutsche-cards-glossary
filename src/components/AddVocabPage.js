import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import VocabForm from './VocabForm';
import { addVocabItem } from '../reduxUtils/actions/vocabItems';

const StyledAddVocabPage = styled.div`
    width: 100vw;
    height: 100vh;
    grid-column: 1;
    grid-row: 2/-1;
    background: #3b6064;
    & label, input, textarea {
        margin: 0.5vh 0.5vw;
        width: 40%;
    }
`;

export class AddVocabPage extends Component {
    onSubmit = (vocabItem) => {
        this.props.addVocabItem(vocabItem);
        this.props.history.push('/vocabItemDashboard')
    }
    render() {
        return (
            <StyledAddVocabPage className="add-vocab-page">
                <VocabForm onSubmit={this.onSubmit} />
            </StyledAddVocabPage>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addVocabItem: (vocabItem) => dispatch(addVocabItem(vocabItem))
})

export default connect(undefined, mapDispatchToProps)(AddVocabPage);