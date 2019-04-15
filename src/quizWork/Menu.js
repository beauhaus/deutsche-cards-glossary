import React from 'react';
import styled from 'styled-components';

import ParamsInput from './ParamsInput';
import XModal from './XModal';

const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 20vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 33.33vh);
    text-align: center;
    & top-rt-placeholder {
        grid-column: 1;
        grid-row: 1;
        background: #58564c;
    }
    & .x-modal-open-btn {
        height: 3vh;
        width: 12vw;
        /* border: 1px solid sandybrown; */
        background: rgb(37, 9, 9);
        color: antiquewhite;
        font-weight: 100;
    }
    & .menu-options {
        grid-column: 1;
        grid-row: 2;
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: 1fr;
    }
    & .lang-switch-btn {
        margin: 10px auto;
        font-size: 18px;
        height: 5vh;
        width: 10vw;
        background: grey;
    }
    & .params-display {
        color: #9cad85;
        text-shadow: 1px 1px 0px #000;
    }
    & .menu-btn:hover {
        color: #fff;
        background: sandybrown;
        /* border: 1px solid #EFE9E1; */
    }

    &.invalid form > input {
        background: #ffd289;
    }

    &.invalid .params-display {
        color: #852a00;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);
    }
    & .top-rt-placeholder {
        /* display: none; */
    }
`;

const Menu = (props) => {
    const { xModalSwitchClickHandler, xModalOpen, dbLen, onRangeSubmit, langSwitchHandler, handleInputChange, validate, langSwitchFlag } = props;
    return (
        <StyledMenu className={validate ? "menu-comp" : "menu-comp invalid"}>
            <div className="top-rt-placeholder">
                <button className="x-modal-open-btn" onClick={xModalSwitchClickHandler}>DB Maintenance</button>
                <XModal xModalOpen={xModalOpen} xModalSwitchClickHandler={xModalSwitchClickHandler} />
            </div>
            <div className="menu-options">
                <button className="lang-switch-btn menu-btn" onClick={langSwitchHandler}> {langSwitchFlag ? "🇩🇪 ➡️ 🇺🇸" : "🇺🇸 ➡️ 🇩🇪"}</button>
                <h2 className="params-display">(1-{dbLen})</h2>
                <ParamsInput onRangeSubmit={onRangeSubmit} handleInputChange={handleInputChange} />
            </div>
        </StyledMenu>
    );
}

module.exports = Menu;