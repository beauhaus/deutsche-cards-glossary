import React, { Component } from 'react'
import Menu from './Menu'
import DisplayCtrl from './DisplayCtrl'

import validator from 'validator';

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: 'state',
            dbArray: props.db,
            lowBound: null,
            upBound: null,
            valid_flag: '',
            de_en_flag: true
        }
        this.onRangeSubmit = this.onRangeSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.languageSwitch = this.languageSwitch.bind(this)
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log("landing UPDATED")
        // console.log("Land update: \nLow: ", this.state.lowBound, "\n up: ", this.state.upBound, "\n len: ", this.state.arrayMod.length)
    }

    handleInputChange(e) {
        const tgt = e.target;
        const value = tgt.value;
        const name = tgt.name;

        console.log("value: ", value);
        console.log("arrLen", this.state.dbArray.length);

        const rangeCheck = validator.isInt(value, { gt: 0, lt: this.state.dbArray.length+1 })
        console.log("rangeCheck: ", rangeCheck);
        
        const symbolCheck =  validator.isNumeric(value, {no_symbols: true})
        console.log("symbolCheck: ", symbolCheck);
        
        const valid_flag = symbolCheck && rangeCheck;

        console.log("valid_flag: ", valid_flag)


            this.setState({
                valid_flag
            })
        
        // console.log("rangeCheck: ", rangeCheck)

        // try {
        //     let valCheck = validator.isInt(value);
        //     if (!'' && !valCheck) {
        //         throw new SyntaxError(`${value} is NOT an integer`)
        //     }
            this.setState({
                [name]: value
            });

        // } catch (err) {
        //     console.log(`${value} is not an Integer`, err)
        // } 


    }
    languageSwitch() {
        this.setState((prevState)=>({
            de_en_flag: !prevState.de_en_flag
        }));
    }
    onRangeSubmit(e) {
        e.preventDefault();
    }

    render() {
        const { de_en_flag, valid_flag,lowBound, upBound, dbArray } = this.state;
        const {handleInputChange, onRangeSubmit, languageSwitch } = this;
        return (
            <div className="landing-comp">
                <Menu handleInputChange={handleInputChange} onRangeSubmit={onRangeSubmit}  langSwitch={languageSwitch} dbLen={dbArray.length} validate={valid_flag}/>
                {(lowBound && upBound && valid_flag) &&
                    <DisplayCtrl
                        langSwitch={de_en_flag}
                        lowBound={lowBound}
                        upBound={upBound}
                        dbPayload={dbArray}
                    />}
            </div>
        )
    }
}

module.exports = Landing;
