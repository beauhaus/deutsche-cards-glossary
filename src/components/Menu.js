import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: ""

        }
    }
    componentDidMount() {
    }
    

    render() {
        const { onRangeSubmit, handleInputChange } = this.props;
        return (
            <div className="menu-comp">
                <div className="menu-options">
                    <h1>Deutsch</h1>
                    <h2>{this.state.lowBound}</h2>
                    <h2>{this.state.upBound}</h2>
                    <form className="menu-form" onSubmit={onRangeSubmit}>
                        <input id="lowerBounds-input" type="text" onChange={handleInputChange} name="lowBound" placeholder="["></input>
                        <input id="upperBounds-input" type="text" onChange={handleInputChange} name="upBound" placeholder="]" ></input>
                        </form>
                        </div>
                        
                        </div>
                        );
                    }
                    // <button>Submit Bounds</button>
}

module.exports = Menu;