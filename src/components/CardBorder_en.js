import React, { Component } from 'react';

class CardBorder_en extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
        }

    }
    componentDidMount() {
        console.log("p>CardBorder: did mount ")
    }

    render() {
        // const { setLS, getLS, getTen, getMore, onRangeSubmit } = this.props;
        return (
            <svg className="card-border card-border-en"  viewBox="0 0 405 405" preserveAspectRatio="none">
                <linearGradient id="card-border-grad" x1="200" x2="200" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset=".065" stop-color="#940000"/>
                <stop offset=".104" stop-color="#971111"/>
                <stop offset=".378" stop-color="#ab8585"/>
                <stop offset=".499" stop-color="#b3b3b3"/>
                <stop offset=".768" stop-color="#3434a8"/>
                <stop offset=".89" stop-color="#0000a3"/>
                </linearGradient>
                <rect width="400" height="395" x="2.5" y="2.5" stroke="url(#card-border-grad)"/>
            </svg>
        );
    }
}

module.exports = CardBorder_en;

// <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
//   <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="200" x2="200" y2="400">
    // <stop offset=".065" stop-color="#940000"/>
    // <stop offset=".104" stop-color="#971111"/>
    // <stop offset=".378" stop-color="#ab8585"/>
    // <stop offset=".499" stop-color="#b3b3b3"/>
    // <stop offset=".768" stop-color="#3434a8"/>
    // <stop offset=".89" stop-color="#0000a3"/>
//   </linearGradient>
//   <path fill="#FFF" stroke="url(#c)" stroke-width="5" stroke-miterlimit="10" d="M2.5 2.5h395v395H2.5z"/>
// </svg>
