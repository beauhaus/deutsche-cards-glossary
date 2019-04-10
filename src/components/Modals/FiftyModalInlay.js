import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import selectVocabItems from '../../reduxUtils/selectors/vocabSelectors';
import VocabDispCard from './VocabDispCard'

const StyledInlay = styled.div`
    width: 90vw;
    margin: 5vh auto;
    min-height: 80vh;
    height: auto;
    font-family: "Montserrat", 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 200;
    color: whitesmoke;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 10vh);
    border: 1px solid rgba(255,255,255,0.4);
    border: 1px solid goldenrod;
    & > .cancel-modal-btn {
        width: 40vw;
        grid-row: 1;
        grid-column: 8;
        width: 100%;
        height: 100%;
        font-size: 5rem; 
        font-weight: 200;
        border: 1px solid rgba(255,255,255,0.4);
        color: rgba(255,255,255,0.4);
        background: transparent; 
    }
    & > .display-array-container {
        grid-row: 1/-1;
        grid-column: 1/-1;
        background: maroon;
    }
`
class FiftyModalInlay extends Component {

    render() {
        const { vocabItems, fiftyModalClear, arrayDispMinIndex } = this.props;
        const subArray = vocabItems.filter((item, idx) => ((idx >= arrayDispMinIndex && idx <= (arrayDispMinIndex + 50))));

        return (
            <StyledInlay className="modal-inlay">
                <button className="cancel-modal-btn" onClick={fiftyModalClear}>X</button>
                {arrayDispMinIndex+1 && 
                    <div className="display-array-container">
                        {subArray.map(item => (
                            <VocabDispCard key={item.id} item={item}/>
                        ))}
                    </div>
                }
            </StyledInlay>
        )
    }
}
const MapStateToProps = (state) => {
    return {
        vocabItems: selectVocabItems(state.vocabItems, state.filters)
    }
}

export default connect(MapStateToProps)(FiftyModalInlay)