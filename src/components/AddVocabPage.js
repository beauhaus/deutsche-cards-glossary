import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import VocabForm from './VocabForm';
// import { addVocabItem } from '../actions/vocabItems';


const StyledAddVocabPage = styled.div`
    width: 100vw;
    height: 100vh;
    grid-column: 1;
    grid-row: 2/-1;
    background: #3b6064;
`;

const AddVocabPage = (props) => (
    <StyledAddVocabPage>
        {console.log("+VocPROPS: ", props)}
        <VocabForm
            onSubmit={(vocabItem) => {
                console.log("vocabItemObj: ", vocabItem)
                // props.dispatch(addVocabItem(vocabItem))
                // props.history.push('/WordListDashboard')
            }} />
    </StyledAddVocabPage>
)

export default connect()(AddVocabPage);