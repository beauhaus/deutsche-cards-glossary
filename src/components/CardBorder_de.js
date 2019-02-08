import React from 'react';

const CardBorder_de = () => (
    <svg className="card-border card-border-de" viewBox="0 0 405 405" preserveAspectRatio="none">
        <linearGradient id="card-border-grad" x1="200" x2="200" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset=".1302" />
            <stop offset=".3785" stopColor="#69001e" />
            <stop offset=".4992" stopColor="#97002b" />
            <stop offset=".7395" stopColor="#d27d0d" />
            <stop offset=".8502" stopColor="#ebb100" />
        </linearGradient>
        <rect width="400" height="395" x="2.5" y="2.5" stroke="url(#card-border-grad)" />
    </svg>
);

module.exports = CardBorder_de;