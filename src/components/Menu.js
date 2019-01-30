import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
        }
        this.onRangeSubmit = this.onRangeSubmit.bind(this)
    }
    onRangeSubmit(e) {
        e.preventDefault();
        const lowerBounds = e.target.lowerBounds.value;
        const upperBounds = e.target.upperBounds.value;
        console.log("upper/lower: ", upperBounds, lowerBounds)
    }
    componentDidMount() {
        console.log("p>Menu: ", this.props)
    }

    render() {
        const { setLS, getLS, getTen, getMore } = this.props;
        return (
            <div id="Menu-box">
                <h1>MENU:</h1>
                <button onClick={setLS}>setLS</button>
                <button onClick={getLS}>GetLS</button>
                <button onClick={getTen}>Get 10</button>
                <button onClick={getMore}>Get More</button>
                <hr />
                <form onSubmit={this.onRangeSubmit}>
                    <input id="upperBounds-input" type="text" name="lowerBounds" placeholder="["></input>
                    <input id="lowerBounds-input" type="text" name="upperBounds" placeholder="]"></input>
                    <button>Submit Bounds</button>
                </form>
            </div>
        );
    }
}

module.exports = Menu;