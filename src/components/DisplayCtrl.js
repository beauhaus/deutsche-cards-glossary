import React, { Component } from 'react';
import VocabCard from './VocabCard';
import { setLS, getLS, utilCtrl, getPartialLS } from '../utils/utils';

class DisplayCtrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
        }
        // this.arrayLoader = this.arrayLoader.bind(this);

    }
  

    render() {
        const {lowBound, upBound, dbPayload} = this.props;
        const arrayMod = dbPayload.filter((item, idx)=>((idx+1>=lowBound)&&(idx<upBound)))
        // const {counter, arrayMod} = this.state;
        // console.log("arrayMod: ", arrayMod)
        return (
            <div className="displayCtrl-box">                
                {arrayMod.map((entry, idx) => (
                    <VocabCard key={idx} entry={entry} idx={idx+1} parity={idx%2?"right-col":"left-col"}/>
                ))}
            </div>
        );
    }
}

module.exports = DisplayCtrl;

/*
  {dbPayload.map((entry, idx) => (
                    (((payloadLower <= idx)  && payloadUpper >= idx) ) &&
                    <VocabCard key={idx} entry={entry} idx={idx}/>
                    ))}
                    */
