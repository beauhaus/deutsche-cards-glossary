import React from 'react';


const CardBorder = (props) => (
    <svg className="card-border card-border-de" viewBox="0 0 405 405" preserveAspectRatio="none">
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
    </svg>
);

module.exports = CardBorder;