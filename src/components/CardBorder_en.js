import React, { Component } from 'react';

const CardBorder_en = () => (
    <svg className="card-border card-border-en" viewBox="0 0 405 405" preserveAspectRatio="none">
        <linearGradient id="card-border-grad" x1="200" x2="200" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset=".065" stopColor="#940000" />
            <stop offset=".104" stopColor="#971111" />
            <stop offset=".378" stopColor="#ab8585" />
            <stop offset=".499" stopColor="#b3b3b3" />
            <stop offset=".768" stopColor="#3434a8" />
            <stop offset=".89" stopColor="#0000a3" />
        </linearGradient>
        <rect width="400" height="395" x="2.5" y="2.5" stroke="url(#card-border-grad)" />
    </svg>
);

module.exports = CardBorder_en;