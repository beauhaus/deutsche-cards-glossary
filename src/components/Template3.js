import React from 'react';
import styled from 'styled-components';

const Styled_Template = styled.div`
    width: 100vw;
    height: 100vh;
    grid-column: 1;
    grid-row: 2/-1;
    background: #3b6064;
`;

const Template3 = (props) => (
    <Styled_Template>
        <h1>Template 3</h1>
    </Styled_Template>
)

module.exports = Template3;