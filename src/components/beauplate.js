import React, { Component } from 'react';
import { connect } from 'react-redux';
import VocabListItem from './VocabListItem';
import selectVocabItems from '../reduxUtils/selectors/vocabSelectors';
import TenModal from './Modals/TenModal';

export class beauplate extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         tenModalSample: null
    //     }
    // }
    state = {
        tenModalSample: null
    }
    tenModalClickHandler=()=> {
        // alert("tenModal")
        this.setState(() =>({
            tenModalSample: true
        }))
    }
    tenModalClear=()=> {        
        this.setState(() =>({
            tenModalSample: null
        }))
    }
    render() {
        return (
            <div>
                <h1>beauplate</h1>
                <button onClick={this.tenModalClickHandler}>TenModal</button>
                <TenModal 
                tenModalSample={this.state.tenModalSample}
                tenModalClear={this.tenModalClear}
                />
                {/*
                <h2>(length: <em>{this.props.vocabItems.length}</em>)</h2>
                {this.props.vocabItems.length === 0 ? (
                    <p>Sorry. I have no words.</p>
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