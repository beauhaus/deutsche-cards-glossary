import React, { Component } from 'react';
import styled from 'styled-components'

import CardBorder_en from './CardBorder_en';

const StyledVocabCard = styled.div`
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 100%;

    & .card-property {
        font-size: 3rem;
        font-weight: 100;
    }

    & > .slide-card-en, .slide-card-de {
        text-align: center;    
    }

    & #card-idx {
        font-size: 8px;
        grid-column: 1;
        grid-row: 1;
    }

    & #word-de {
        font-weight: bold;
        grid-column: 1;
        grid-row: 1;
        margin: auto;
    }

    & #word-en {
        font-weight: bold;
        grid-column: 1;
        grid-row: 1;
        margin: auto;
    }

    & #example-de {
        grid-column: 1;
        grid-row: 2;
    }

    & #example-en {
        grid-column: 1;
        grid-row: 2;
    }
    
    .card-clue {
        grid-row: 1;
        grid-column: 1;
        background: #60665A;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    }

    .card-solution {
        grid-row: 1;
        grid-column: 1;
        opacity: 0;
        background: #60665A;
        position: relative;
        width: 100%;
        height: 102%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        opacity: 1;
    }
`;

class VocabCard_en2de extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: "",
            showSolution: false
        }
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
            <StyledVocabCard id="vocab-card" className={parity} onMouseDown={this.mouseDownHandler}>
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
            </StyledVocabCard>
        );
    }
}

module.exports = VocabCard_en2de;