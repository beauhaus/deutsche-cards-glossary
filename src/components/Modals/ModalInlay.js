import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import selectVocabItems from '../../reduxUtils/selectors/vocabSelectors';
import VocabDispCard from './VocabDispCard';

const StyledModalInlay = styled.div`
    width: 80vw;
    margin: 5vh auto;
    min-height: 80vh;
    height: auto;
    font-family: "Montserrat", 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 200;
    color: whitesmoke;
    
    /* border: 1px solid rgba(255,255,255,0.4); */
    border: 1px solid teal;
    
    position: relative;
    & > .cancel-modal-btn {
        z-index: 2;
        position: absolute;
        top: 0;
        right: 0;
        width: 5vw;
        height: 6vh;
        grid-row: 1;
        grid-column: 8;
        /* width: 100%;
        height: 100%; */
        font-size: 4rem; 
        font-weight: 200;
        border: 1px solid rgba(255,255,255,0.4);
        color: rgba(255,255,255,0.4);
        color: red;
        /* background: transparent;  */
    }
    & > .display-array-container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /* grid-template-rows: auto; */
        /* background: maroon; */
        & > :nth-child(even) {
            margin-top: 20vh;
        }
        & > :nth-child(odd) {
            margin-top: 5vh;
        }
    }
`
class ModalInlay extends Component {

    render() {
        const { vocabItems, fiftyModalClear, arrayDispMinIndex } = this.props;
        const subArray = vocabItems.filter((item, idx) => ((idx >= arrayDispMinIndex && idx <= (arrayDispMinIndex + 50))));

        return (
            <StyledModalInlay className="modal-inlay">
            <button className="cancel-modal-btn" onClick={fiftyModalClear}>X</button>
            {arrayDispMinIndex+1 && 
                <div className="display-array-container">
                {subArray.map(item => (
                    <VocabDispCard key={item.id} item={item}/>
                    ))}
                    </div>
                }
            </StyledModalInlay>
        )
    }
}
const MapStateToProps = (state) => {
    return {
        vocabItems: selectVocabItems(state.vocabItems, state.filters)
    }
}

export default connect(MapStateToProps)(ModalInlay)