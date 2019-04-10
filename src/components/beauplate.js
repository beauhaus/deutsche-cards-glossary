import React, { Component } from 'react';
import { connect } from 'react-redux';
import VocabListItem from './VocabListItem';
import selectVocabItems from '../reduxUtils/selectors/vocabSelectors';
import FiftyButton from './Modals/FiftyButton';
import FiftyModal from './Modals/FiftyModal';
import styled from 'styled-components';

const Styled_BeauPlate = styled.div`
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

export class beauplate extends Component {
    state = {
        fiftyModalSample: null
    }
    fiftyModalClickHandler=(e)=> {
        e.preventDefault();
        const val = e.target.value;
        console.log("val: ", val)
        this.setState(() =>({
            fiftyModalSample: val
        }))
    }
    fiftyModalClear=()=> {        
        this.setState(() =>({
            fiftyModalSample: null
        }))
    }
    render() {
        const {vocabItems} = this.props;
        return (
            <Styled_BeauPlate className="styled-beauplate">
                {vocabItems.map((item, idx, arr)=>{
                    return(
                        (idx%50 === 0)?
                        <FiftyButton key={idx} idx={idx} fiftyModalClickHandler={this.fiftyModalClickHandler}/>:
                     '');
                })}

                <FiftyModal 
                fiftyModalSample={this.state.fiftyModalSample}
                fiftyModalClear={this.fiftyModalClear}
                />
            </Styled_BeauPlate>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        vocabItems: selectVocabItems(state.vocabItems, state.filters)
    }
}
export default connect(MapStateToProps)(beauplate)

// export default beauplate;