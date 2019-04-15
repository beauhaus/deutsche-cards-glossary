import React from 'react';
import styled from 'styled-components';

const StyledBorder = styled.svg`
        fill: transparent;
        position: absolute;
        top: 0;
        left: -1px;
        height: 102%;
        width: 100%;
        stroke-width: 2px;
        stroke-dasharray: 1590px;
        fill: transparent;
        animation: 0.3s infinite forwards drawSVG;
        animation-iteration-count: 1;

    @keyframes drawSVG {
        0% {
            stroke-dashoffset: -1590px;
        }

        100% {
            stroke-dashoffset: 0px;
        }
    }
`;

const CardBorder = (props) => (
    <StyledBorder className="card-border card-border-de" viewBox="0 0 405 405" preserveAspectRatio="none">
        <linearGradient id="card-border-grad-de" x1="200" x2="200" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset=".1302" />
            <stop offset=".3785" stopColor="#69001e" />
            <stop offset=".4992" stopColor="#97002b" />
            <stop offset=".7395" stopColor="#d27d0d" />
            <stop offset=".8502" stopColor="#ebb100" />
        </linearGradient>
        <linearGradient id="card-border-grad-en" x1="200" x2="200" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset=".065" stopColor="#940000" />
            <stop offset=".104" stopColor="#971111" />
            <stop offset=".378" stopColor="#ab8585" />
            <stop offset=".499" stopColor="#b3b3b3" />
            <stop offset=".768" stopColor="#3434a8" />
            <stop offset=".89" stopColor="#0000a3" />
        </linearGradient>
        <rect width="400" height="395" x="2.5" y="2.5" stroke={props.langSwitch?"url(#card-border-grad-de)":"url(#card-border-grad-en)"} />
    </StyledBorder>
);

module.exports = CardBorder;