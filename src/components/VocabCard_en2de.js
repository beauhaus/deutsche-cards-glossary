import React, { Component } from 'react';

import CardBorder_en from './CardBorder_en';

class VocabCard_en2de extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
            showSolution: false
        }
    }

    componentDidMount() {
        console.log("VocabCard  loaded")
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("VocabCard  updated")
    }

    mouseDownHandler = () => {
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
                    <p className="card-property" id="card-idx">{idx}</p>
                    <h1 className="card-property card-word" id="word-en">{word_de}</h1>
                    <h1 className="card-property" id="example-en">{example_de}</h1>
                </div>
                {this.state.showSolution &&
                    <div className="slide-card-de card-solution">
                        <h3 className="card-property" id="word-de">{word_en}</h3>
                        <h3 className="card-property" id="example-de">{example_en}</h3>
                        <CardBorder_en />
                    </div>
                }
            </div>
        );
    }
}

module.exports = VocabCard_en2de;