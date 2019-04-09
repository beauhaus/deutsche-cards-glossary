import React, { Component } from 'react';
import { connect } from 'react-redux';
import VocabListItem from './VocabListItem';
import selectVocabItems from '../reduxUtils/selectors/vocabSelectors';
import FiftyButton from './Modals/FiftyButton';
import FiftyModal from './Modals/FiftyModal';

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
            <div>
                <p>beauplate</p>
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
                {/*
                {this.props.vocabItems.length === 0 ? (
                    <p>Sorry. length is zero.</p>
                ) :
                    (<h2>{this.props.vocabItems.map((vocabItem) => {
                        return <VocabListItem key={vocabItem.id} {...vocabItem} />
                    })}
                    </h2>)
                }
            */}
            </div>
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