var React = require('react');
const utils = require("../utils/utils.js");

class Bounds extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "state",
            lowerbound: '0',
            upperbound: '99'
        }
        this.firstHundredClickHandler = this.firstHundredClickHandler.bind(this);
        this.secondHundredClickHandler = this.secondHundredClickHandler.bind(this);
        this.thirdHundredClickHandler = this.thirdHundredClickHandler.bind(this);
        this.fourthHundredClickHandler = this.fourthHundredClickHandler.bind(this);
    }


    firstHundredClickHandler() {
        utils.ctrl(utils.getPartialLS, 0, 99);
    }

    secondHundredClickHandler() {
        utils.ctrl(utils.getPartialLS, 100, 199);
    }
    thirdHundredClickHandler() {
        utils.ctrl(utils.getPartialLS, 200, 299);
    }

    fourthHundredClickHandler() {
        utils.ctrl(utils.getPartialLS, 300, 399);
    }

    render() {
        const { upperbound, lowerbound } = this.state;
        return (
            <div id="bounds-box">
                <h1>Range: <span>{lowerbound}</span>–<span>{upperbound}</span></h1>
                <button onClick={this.firstHundredClickHandler}>0-99</button>
                <button onClick={this.secondHundredClickHandler}>100-199</button>
                <button onClick={this.thirdHundredClickHandler}>200-299</button>
                <button onClick={this.fourthHundredClickHandler}>300-399</button>
            </div>
        );
    }
}

module.exports = Bounds;


/*
        this.fifthHundredClickHandler = this.fifthHundredClickHandler.bind(this);
        this.sixthHundredClickHandler = this.sixthHundredClickHandler.bind(this);
        this.seventhHundredClickHandler = this.seventhHundredClickHandler.bind(this);
        this.eighthHundredClickHandler = this.eighthHundredClickHandler.bind(this);
        this.ninthHundredClickHandler = this.ninthHundredClickHandler.bind(this);
        this.tenthHundredClickHandler = this.tenthHundredClickHandler.bind(this);
        this.eleventhHundredClickHandler = this.eleventhHundredClickHandler.bind(this);


    thirdHundredClickHandler() {
        this.setState((prevState) => ({
            lowerbound: 200,
            upperbound: 299
        })
        )
    }

    fourthHundredClickHandler() {
        this.setState((prevState) => ({
            lowerbound: 300,
            upperbound: 399
        })
        )
    }

    fifthHundredClickHandler() {
        this.setState((prevState) => ({
            lowerbound: 400,
            upperbound: 499
        })
        )
    }

    sixthHundredClickHandler() {
        this.setState((prevState) => ({
            lowerbound: 500,
            upperbound: 599
        })
        )
    }

    seventhHundredClickHandler() {
        this.setState((prevState) => ({
            lowerbound: 600,
            upperbound: 699
        })
        )
    }

    eighthHundredClickHandler() {
        this.setState((prevState) => ({
            lowerbound: 700,
            upperbound: 799
        })
        )
    }

    ninthHundredClickHandler() {
        this.setState((prevState) => ({
            lowerbound: 800,
            upperbound: 899
        })
        )
    }

    tenthHundredClickHandler() {
        this.setState((prevState) => ({
            lowerbound: 900,
            upperbound: 999
        })
        )
    }

    eleventhHundredClickHandler() {
        this.setState((prevState) => ({
            lowerbound: 1000,
            upperbound: 1099
        })
        )
    }



                <button onClick={this.fifthHundredClickHandler}>400-499</button>
                <button onClick={this.sixthHundredClickHandler}>500-599</button>
                <button onClick={this.seventhHundredClickHandler}>600-699</button>
                <button onClick={this.eighthHundredClickHandler}>700-799</button>
                <button onClick={this.ninthHundredClickHandler}>800-899</button>
                <button onClick={this.tenthHundredClickHandler}>900-999</button>
                <button onClick={this.eleventhHundredClickHandler}>1000-?</button>


                */