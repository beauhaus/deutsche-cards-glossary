import React, { Component } from 'react';

const FiftyButton = (props => {
    return (
        <div className="fifty-btn">
            <button onClick={props.fiftyModalClickHandler} value={props.idx}>{props.idx + 1}–{props.idx + 50}</button>
        </div>
    )
}) 

export default FiftyButton;