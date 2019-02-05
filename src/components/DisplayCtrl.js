import React, { Component } from 'react';
import VocabCard from './VocabCard';

class DisplayCtrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
        }
    }
  

    render() {
        const {lowBound, upBound, dbPayload} = this.props;
        const arrayMod = dbPayload.filter((item, idx)=>((idx+1>=lowBound)&&(idx<upBound)))
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