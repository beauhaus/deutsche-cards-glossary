import React, {Component} from 'react';
// import {setLS, getLS, ctrl} from '../utils/utils';

class DisplayCtrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
        }
        // this.buttonSetLSClick = this.buttonSetLSClick.bind(this);
    }
    render() {
        console.log("p> DisplCtrl: ", this.props)
        return (
            <div id="displayCtrl-box">
                <h1>displayCtrl:</h1>
            </div>
        );
    }
}

module.exports = DisplayCtrl;


