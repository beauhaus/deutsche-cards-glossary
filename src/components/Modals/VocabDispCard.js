import React from 'react';
import styled from 'styled-components'

const VocDispCard = styled.div`
    border: 1px solid coral;
    height: 10vh;
    width: 40vw;   
`;
const FiftyButton = (props => {
    const item = props.item;
    return (
        <VocDispCard className="vocab-disp-card">
            <p>{item.word_de}</p>
            <p>{item.example_de}</p>
            <p>{item.word_en}</p>
            <p>{item.example_en}</p>
        </VocDispCard>
    )
}) 

export default FiftyButton;