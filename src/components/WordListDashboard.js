import React from 'react';
import styled from 'styled-components';
import WordList from './WordList';
// import VocabListFilters from './VocabListfilters'

const Styled_Template = styled.div`
     width: 100vw;
    height: 100vh;
    grid-column: 1;
    grid-row: 2/-1;
    background: #364958;
`;

const WordListDashboard = (props) => (
    <Styled_Template>
        <VocabListFilters />
        <WordList />
    </Styled_Template>
)

export default WordListDashboard;