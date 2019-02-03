import React, {Component} from 'react'
import {setLS, getLS, utilCtrl, getPartialLS} from '../utils/utils';

import Menu from './Menu'
import DisplayCtrl from './DisplayCtrl'




class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: 'state',
            ls: []
        }
    this.setLSClick = this.setLSClick.bind(this);
    this.getLS = this.getLS.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.setRange = this.setRange.bind(this);
    }
    componentWillMount() {
        setLS();
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log("Land update: \nLow: ", this.state.lowerBounds, "\n up: ", this.state.upperBounds )
    }
    setLSClick() {
        setLS();
    }
    getLS() {
        const payload = getLS();
        this.setState((prevState) => ({
            ls: payload
        }))
    }
    setRange(e) {
        const lowerBounds = parseInt(e.target.lowerBounds.value);
        const upperBounds = parseInt(e.target.upperBounds.value);
        this.setState((prevState) =>(
            {
                lowerBounds,
                upperBounds
            }
        ))
    }
    onRangeSubmit(e) {
        this.getLS();
        e.preventDefault();
        this.setRange(e);
    }


    render() {
        const {lowerBounds, upperBounds, ls} = this.state;
        return (
            <div className="landing-comp">
            <Menu setLS ={this.setLSClick} getLS={this.getLS}  onRangeSubmit={this.onRangeSubmit}/>
        
        <DisplayCtrl payloadLower={lowerBounds} payloadUpper={upperBounds} dbPayload={ls}/> 
            </div>
        )
    }
}

module.exports = Landing;