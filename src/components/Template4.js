import React from 'react';
import styled from 'styled-components';

const Styled_Template = styled.div`
    background: burlywood;
    width: 100vw;
    height: 100vh;
`;

const Template4 = (props) => (
    <Styled_Template>
    {console.log("P> Template: ", props)}
        <h1>Template4</h1>
    </Styled_Template>
)

module.exports = Template4;