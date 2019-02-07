import React, { Component } from 'react';

import ParamsInput from './ParamsInput';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: ""
        }
    }

    render() {
        const { dbLen, onRangeSubmit, handleInputChange, validate } = this.props;
        return (
            <div className={validate ? "menu-comp" : "menu-comp invalid"}>
                <div className="menu-options">
                    <h1>Deutsch</h1>
                    <h2 className="params-display">(1-{dbLen})</h2>
                    <ParamsInput onRangeSubmit={onRangeSubmit} handleInputChange={handleInputChange} />
                </div>

            </div>
        );
    }
}

module.exports = Menu;