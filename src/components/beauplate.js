import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectVocabItems from '../reduxUtils/selectors/vocabSelectors';
import FiftyButton from './Modals/FiftyButton';
import FiftyModalWrapper from './Modals/FiftyModalWrapper';
import styled from 'styled-components';

const StyledCards = styled.div`
    width: 80vw;
    margin: 4vh auto;
    /* outline: 4px ridge maroon; */
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 5px;
    button {
        width: 100%;
        height: 4vh;
        /* background: transparent; */
        &:hover {
            outline: 1px solid coral;
        }
    }
    &:nth-child(2) > div:nth-child(even)>button {
        background: #885959;
        margin-top: 4vh;
        }
    &:nth-child(2) > div:nth-child(odd)>button {
        background: #598871;
        }
`;

export class CardsDisplay extends Component {
    state = {
        arrayDispMinIndex: 0,
        modalIsOpen: false
    }
    fiftyModalClickHandler=(e)=> {
        e.preventDefault();
        const val = parseInt(e.target.value);
        this.setState(() =>({
            arrayDispMinIndex: val,
            modalIsOpen: true
        }))
    }
    fiftyModalClear=()=> {        
        this.setState(() =>({
            arrayDispMinIndex: null,
            modalIsOpen: false
        }))
    }
    render() {
        const {vocabItems} = this.props;
        return (
            <StyledCards className="styled-cards-display">
                {vocabItems.map((item, idx)=>{
                    return(
                        (idx%50 === 0)?
                        <FiftyButton key={idx} idx={idx} fiftyModalClickHandler={this.fiftyModalClickHandler}/>:
                     '');
                })}

                <FiftyModalWrapper
                modalIsOpen={this.state.modalIsOpen}
                arrayDispMinIndex={this.state.arrayDispMinIndex}
                fiftyModalClear={this.fiftyModalClear}
                />
            </StyledCards>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        vocabItems: selectVocabItems(state.vocabItems, state.filters)
    }
}
export default connect(MapStateToProps)(CardsDisplay)