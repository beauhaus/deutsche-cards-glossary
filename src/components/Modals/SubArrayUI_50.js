import React from 'react';

const SubArrayUI_50 = (props => {
    return (
        <div className="fifty-btn-container">
            <button onClick={props.fiftyModalClickHandler} value={props.idx}>{props.idx + 1}–{props.idx + 50}</button>
        </div>
    )
}) 

export default SubArrayUI_50;