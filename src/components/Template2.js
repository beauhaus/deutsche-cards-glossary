import React from 'react';
import styled from 'styled-components';

const Styled_Template = styled.div`
    width: 100vw;
    height: 100vh;
    grid-column: 1;
    grid-row: 2/-1;
    background: #55828b;
`;

const Template2 = (props) => (
    <Styled_Template>
        <h1>Template 2</h1>
    </Styled_Template>
)

module.exports = Template2;