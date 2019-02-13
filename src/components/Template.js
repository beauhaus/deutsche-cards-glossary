import React from 'react';
import styled from 'styled-components';

const Styled_Template = styled.div`
    width: 100vw;
    height: 100vh;
    grid-column: 1;
    grid-row: 2/-1;
    background: #87bba2;
`;


const Template = (props) => (
    <Styled_Template className="myTemplate">
        <h1>Template 0</h1>
    </Styled_Template>
)

module.exports = Template;