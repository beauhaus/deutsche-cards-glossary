import React, { Component } from 'react';
import VocabCard_de2en from './VocabCard_de2en';
import VocabCard_en2de from './VocabCard_en2de';


class DisplayCtrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
        }
    }
  

    render() {
        const {langSwitchFlag, lowBound, upBound, dbPayload} = this.props;
        console.log("p> DisC: ", this.props)
        const arrayMod = dbPayload.filter((item, idx)=>((idx+1>=lowBound)&&(idx<upBound)))
        return (
            <div className="displayCtrl-box">                
                {langSwitchFlag?
                    arrayMod.map((entry, idx) => (
                    <VocabCard_de2en key={idx} entry={entry} idx={idx+1} parity={idx%2?"right-col":"left-col"}/>
                )):
                arrayMod.map((entry, idx) => (
                    <VocabCard_en2de key={idx} entry={entry} idx={idx+1} parity={idx%2?"right-col":"left-col"}/>
                ))
            }
            </div>
        );
    }
}

module.exports = DisplayCtrl;