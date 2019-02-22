import React from 'react';
import styled from 'styled-components';
import VocabForm from './VocabForm';

const StyledAddVocabPage = styled.div`
    width: 100vw;
    height: 100vh;
    grid-column: 1;
    grid-row: 2/-1;
    background: #3b6064;
`;

const AddVocabPage = (props) => (
    <StyledAddVocabPage>
    <h1>Add Vocab</h1>
    <VocabForm/>
    </StyledAddVocabPage>
)

export default AddVocabPage;

/*
class AddVocabPage extends Component {
    render() {
        return (
            <div>
            <h1>AddVocabPage</h1>
            <VocabForm/>
            </div>
        )
    }

}

export default AddVocabPage;

*/