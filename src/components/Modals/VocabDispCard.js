import React from 'react';
import styled from 'styled-components'

const VocDispCard = styled.div`
    width: 20vw;
    border: 1px solid coral;
`;
const FiftyButton = (props => {
    const item = props.item;
    return (
        <VocDispCard className="vocab-disp-card">
            <p>{item.word_de}</p>

        </VocDispCard>
    )
}) 

export default FiftyButton;