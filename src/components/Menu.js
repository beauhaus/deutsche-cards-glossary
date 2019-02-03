import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
        }
        
    }
    componentDidMount() {
        // console.log("p>Menu: ", this.props)
    }

    // <button onClick={getTen}>Get 10</button>
    render() {
        const { setLS, getLS, getTen, getMore, onRangeSubmit } = this.props;
        return (
            <div className="menu-comp">
                <div className="menu-options">
                    <h1>Deutsch</h1>
                    <div className="menu-btns">
                        <button className="menu-btn" onClick={setLS}>setLS</button>
                        <button className="menu-btn" onClick={getLS}>GetLS</button>
                    </div>
                    <form className="menu-form" onSubmit={onRangeSubmit}>
                        <input id="upperBounds-input" type="text" name="lowerBounds" placeholder="["></input>
                        <input id="lowerBounds-input" type="text" name="upperBounds" placeholder="]" ></input>
                        <button>Submit Bounds</button>
                    </form>
                </div>

            </div>
        );
    }
}

module.exports = Menu;