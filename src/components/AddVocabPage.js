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
`;

export class AddVocabPage extends Component {
    onSubmit = (vocabItem) => {
        this.props.addVocabItem(vocabItem);
        this.props.history.push('/vocabItemDashboard')
    }
    render() {
        return (
            <StyledAddVocabPage>
                <VocabForm
                    onSubmit={this.onSubmit} />
            </StyledAddVocabPage>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addVocabItem: (vocabItem) => dispatch(addVocabItem(vocabItem))
})

export default connect(undefined, mapDispatchToProps)(AddVocabPage);

/*

import React from 'react';
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
`;


const AddVocabPage = (props) => (
    <StyledAddVocabPage>
        <VocabForm
            onSubmit={(vocabItem) => {
                props.dispatch(addVocabItem(vocabItem))
                props.history.push('/vocabItemDashboard')
            }} />
    </StyledAddVocabPage>
)

export default connect()(AddVocabPage);

*/