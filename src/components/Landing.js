import React, { Component } from 'react'
import Menu from './Menu'
import DisplayCtrl from './DisplayCtrl'

import validator from 'validator';

class Landing extends Component {
    state = {
        init: 'state',
        dbArray: this.props.db,
        lowBound: null,
        upBound: null,
        valid_flag: '',
        de_en_flag: true,
        xModalOpen: false
    }
    componentWillUpdate(nextProps, nextState) {
        // console.log("Land update: \nNextProps: ", nextProps)
        // console.log("Land update: \nNextState: ", nextState)
    }

    handleInputChange= (e)=> {
        const tgt = e.target;
        const value = tgt.value;
        const name = tgt.name;

        const rangeCheck = validator.isInt(value, { gt: 0, lt: this.state.dbArray.length+1 })
        const symbolCheck =  validator.isNumeric(value, {no_symbols: true})        
        const valid_flag = symbolCheck && rangeCheck;

        this.setState({
            valid_flag,
            [name]: value
        })
    }

    xModalSwitchClickHandler=() => {
        this.setState((prevState)=>(
            {xModalOpen: !prevState.xModalOpen}
        ))
    }

    langSwitchHandler= () =>{
        this.setState((prevState)=>({
            de_en_flag: !prevState.de_en_flag
        }));
    }

    onRangeSubmit =(e) =>{
        e.preventDefault();
    }

    render() {
        const { xModalOpen, de_en_flag, valid_flag,lowBound, upBound, dbArray } = this.state;
        const { xModalSwitchClickHandler, handleInputChange, onRangeSubmit, langSwitchHandler } = this;
        return (
            <div className="landing-comp">
                <Menu 
                handleInputChange={handleInputChange} 
                onRangeSubmit={onRangeSubmit}
                langSwitchHandler={langSwitchHandler}
                dbLen={dbArray.length} 
                validate={valid_flag}  
                langSwitchFlag={de_en_flag}
                xModalOpen={xModalOpen}
                xModalSwitchClickHandler={xModalSwitchClickHandler}
                />
                {(lowBound && upBound && valid_flag) &&
                    <DisplayCtrl
                        langSwitchFlag={de_en_flag}
                        lowBound={lowBound}
                        upBound={upBound}
                        dbPayload={dbArray}
                    />}
            </div>
        )
    }
}

module.exports = Landing;
