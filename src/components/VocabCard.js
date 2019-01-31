import React, {Component} from 'react';
import {getPartialLS, utilCtrl} from '../utils/utils';

class VocabCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
        }
        // this.buttonSetLSClick = this.buttonSetLSClick.bind(this);
    }
    componentDidMount() {
        console.log("VocabCard  loaded")
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("VocabCard  updated")
    }

    render() {
        return (
            <div id="vocab-card" className="vocab-card">
                <h1 className="card-property">{this.props.entry.word_en}</h1>
                <h3 className="card-property">{this.props.entry.word_de}</h3>
                <h1 className="card-property">{this.props.entry.example_en}</h1>
                <h3 className="card-property">{this.props.entry.example_de}</h3>
                <hr />
            </div>
        );
    }
}

module.exports = VocabCard;


