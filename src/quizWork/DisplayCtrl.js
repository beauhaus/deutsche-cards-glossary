import React from 'react';
import styled from 'styled-components';

import VocabCard_de2en from './VocabCard_de2en';
import VocabCard_en2de from './VocabCard_en2de';

const StyledDisplay = styled.div`
    grid-column: 2/4;
    display: grid;
    grid-template-columns: repeat(16, 5vw);
    grid-template-rows: auto;
    width: 100%;
    margin-top: 1vh;

    & .left-col {
        background: #60665A;
        grid-column: 2/8;
        width: 100%;
        height: 30vh;
        box-shadow: -30px 30px 30px 0px black;
    }

    & .right-col {
        background: #60665A;
        grid-column: 9/15;
        width: 100%;
        height: 30vh;
        box-shadow: -30px 30px 30px 0px black;
        margin-top: 12vh;
    }

`;

const DisplayCtrl =(props) => {
    const { langSwitchFlag, lowBound, upBound, dbPayload } = props;
    const arrayMod = dbPayload.filter((item, idx) => ((idx + 1 >= lowBound) && (idx < upBound)))
    return (
        <StyledDisplay className="displayCtrl-box">
            {langSwitchFlag ?
                arrayMod.map((entry, idx) => (
                    <VocabCard_de2en key={idx}
                     langSwitch={langSwitchFlag}
                     entry={entry}
                     idx={idx + 1}
                     parity={idx % 2 ? "right-col" : "left-col"}
                     />
                )) :
                arrayMod.map((entry, idx) => (
                    <VocabCard_en2de key={idx}
                    langSwitch={langSwitchFlag}
                    entry={entry}
                     idx={idx + 1}
                     parity={idx % 2 ? "right-col" : "left-col"}
                     />
                ))
            }
        </StyledDisplay>
    )
}

module.exports = DisplayCtrl;