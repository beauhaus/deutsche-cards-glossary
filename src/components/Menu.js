import React, { Component } from 'react';
import ParamsInput from './ParamsInput';
import XModal from './XModal';

class Menu extends Component {
    render() {
        const { dbLen, onRangeSubmit,langSwitchHandler, handleInputChange, validate, langSwitchFlag } = this.props;
        return (
            <div className={validate ? "menu-comp" : "menu-comp invalid"}>
            <XModal/>
                <div className="menu-options">
                    <button className="lang-switch-btn menu-btn" onClick={langSwitchHandler}> {langSwitchFlag?"🇩🇪 ➡️ 🇺🇸":"🇺🇸 ➡️ 🇩🇪"}</button>
                    <h2 className="params-display">(1-{dbLen})</h2>
                    <ParamsInput onRangeSubmit={onRangeSubmit} handleInputChange={handleInputChange} />
                </div>

            </div>
        );
    }
}

module.exports = Menu;