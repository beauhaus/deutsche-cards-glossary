import React from 'react';
import ParamsInput from './ParamsInput';
import XModal from './XModal';

const Menu = (props) => {
    const { xModalSwitchClickHandler, xModalOpen, dbLen, onRangeSubmit, langSwitchHandler, handleInputChange, validate, langSwitchFlag } = props;
    return (
        <div className={validate ? "menu-comp" : "menu-comp invalid"}>
        <div className="top-rt-placeholder">
            <button className="x-modal-open-btn" onClick={xModalSwitchClickHandler}>XModal Open</button>
            <XModal xModalOpen={xModalOpen} xModalSwitchClickHandler={xModalSwitchClickHandler} />
        </div>
            <div className="menu-options">
                <button className="lang-switch-btn menu-btn" onClick={langSwitchHandler}> {langSwitchFlag ? "🇩🇪 ➡️ 🇺🇸" : "🇺🇸 ➡️ 🇩🇪"}</button>
                <h2 className="params-display">(1-{dbLen})</h2>
                <ParamsInput onRangeSubmit={onRangeSubmit} handleInputChange={handleInputChange} />
            </div>
        </div>
    );
}

module.exports = Menu;