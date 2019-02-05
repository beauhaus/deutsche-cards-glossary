import React, { Component } from 'react'
import Menu from './Menu'
import DisplayCtrl from './DisplayCtrl'
// import {getLS} from '../utils/utils'



class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: 'state',
            dbArray: props.db,
            lowBound: null,
            upBound: null
        }


        this.onRangeSubmit = this.onRangeSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    componentDidMount() {

    }
    componentWillMount() {
        // console.log("landing WILL mnt")
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log("landing UPDATED")

        // console.log("Land update: \nLow: ", this.state.lowBound, "\n up: ", this.state.upBound, "\n len: ", this.state.arrayMod.length)
    }
 
    handleInputChange(e) {
        const tgt = e.target;
        const value = tgt.value;
        const name = tgt.name;
        // console.log(`hInpChange: ${name}: ${value}`)
        // console.log("arrmodLength: ", this.state.arrayMod.length)
        this.setState({
            [name]: value
        }
        );
    }
    onRangeSubmit(e) {
        e.preventDefault();
    }


    render() {
        // <span>{`${lowBound}, ${upBound}, ${arrayMod.length}`}</span>
        const { lowBound, upBound, dbArray } = this.state;
        return (
            <div className="landing-comp">

                <Menu handleInputChange={this.handleInputChange} onRangeSubmit={this.onRangeSubmit} />
                {(lowBound && upBound) &&
                    <DisplayCtrl
                        lowBound={lowBound}
                        upBound={upBound}
                        dbPayload={dbArray}
                    />}
            </div>
        )
    }
}

module.exports = Landing;
