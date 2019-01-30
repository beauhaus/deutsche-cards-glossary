import React, {Component} from 'react'
import {setLS, getLS, ctrl, getPartialLS} from '../utils/utils';

import Menu from './Menu'
import DisplayCtrl from './DisplayCtrl'


// import db from '../data/vocabDB.json'



class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: 'state',
            currentDisplay: []
        }
    // this.currentDisplayHandler = this.currentDisplayHandler.bind(this);
    this.setLSClick = this.setLSClick.bind(this);
    this.getLSClick = this.getLSClick.bind(this);
    this.getTenClick = this.getTenClick.bind(this);
    this.getMoreClick = this.getMoreClick.bind(this);

    }
    getTenClick() {
        this.setState((prevState) =>(
            {
                lowerBounds: 0,
                upperBounds: 9
            }
        ))
    }
    setLSClick() {
        setLS();
    }
    getLSClick() {
        const payload = getLS();
        // console.log("from LANDING: ", payload)
    }
    getMoreClick() {
        // const more = getLS();
        console.log("getMore from LANDING: ")
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("component updated")

    }


    render() {
        return (
            <div>
            <h1>Landing with form</h1>
            <Menu setLS ={this.setLSClick} getLS={this.getLSClick} getTen={this.getTenClick} getMore={this.getMoreClick}/>
            <DisplayCtrl lower={this.state.lowerBounds} upper={this.state.upperBounds}/>
            </div>
        )
    }
}

module.exports = Landing;