import React, {Component} from 'react';
import {getPartialLS, utilCtrl} from '../utils/utils';
import CardBorder from './CardBorder';

class VocabCard extends Component {
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
        const {id, word_en, word_de, example_en, example_de} = this.props.entry;
        const {idx} = this.props;
        return (
            <div id="vocab-card" className={((id === 0 || id % 2) ? `vocab-card-left` : `vocab-card-right`)} onMouseDown={this.mouseDownHandler}>
                <h1 className="card-property" id="card-idx">{idx} </h1>
                <div className="slide-card-en card-hint">
                    <h1 className="card-property card-word" id="word-en">{word_en}</h1>
                    <h1 className="card-property" id="example-en">{example_en}</h1>
                </div>
                {this.state.showSolution &&
                    <div className="slide-card-de card-reveal">
                        <h3 className="card-property" id="word-de">{word_de}</h3>
                        <h3 className="card-property" id="example-de">{example_de}</h3>
                        <CardBorder/>
                    </div>
                }
            </div>
        );
    }
}

module.exports = VocabCard;


