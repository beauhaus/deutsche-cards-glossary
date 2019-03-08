import React from 'react';
import styled from 'styled-components';
import VocabItemList from './VocabItemList';
import VocabListFilters from './VocabListfilters'

const Styled_Template = styled.div`
     width: 100vw;
    height: 100vh;
    grid-column: 1;
    grid-row: 2/-1;
    background: #364958;
`;

const VocabItemDashboard = (props) => (
    <Styled_Template>
    {/* 
    */}
        <VocabListFilters />
        <VocabItemList />
    </Styled_Template>
)


export default VocabItemDashboard;