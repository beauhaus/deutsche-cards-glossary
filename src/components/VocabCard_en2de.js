import React, { Component } from 'react';
// import {getPartialLS, utilCtrl} from '../utils/utils';
import CardBorder_de from './CardBorder_de';

class VocabCard_en2de extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
            showSolution: false
        }
        this.mouseDownHandler = this.mouseDownHandler.bind(this);
    }
    componentDidMount() {
        console.log("VocabCard  loaded")
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("VocabCard  updated")
    }
    mouseDownHandler() {
        this.setState((prevState) => ({
            showSolution: !prevState.showSolution
        }))
    }


    render() {
        const { word_en, word_de, example_en, example_de } = this.props.entry;
        const { parity, idx } = this.props;

        return (

            <div id="vocab-card" className={parity} onMouseDown={this.mouseDownHandler}>
                <div className="slide-card-en card-clue">
                    <h1 className="card-property" id="card-idx">{idx} </h1>
                    <h1 className="card-property card-word" id="word-en">{word_de}</h1>
                    <h1 className="card-property" id="example-en">{example_de}</h1>
                </div>
                {this.state.showSolution &&
                    <div className="slide-card-de card-solution">
                        <h3 className="card-property" id="word-de">{word_en}</h3>
                        <h3 className="card-property" id="example-de">{example_en}</h3>
                        </div>
                    }
                    </div>
                    );
                    // <CardBorder_de />
    }
}

module.exports = VocabCard_en2de;