import React from 'react';
import {connect} from 'react-redux';
import VocabItem from './VocabItem';
// import selectVocab from '../reduxUtils/selectors/vocabSelectors';


const VocabItemList = (props) =>(
    <div>
       <h1>VocabItemList</h1>
       <h2><em>{props.vocabItems.length}</em></h2>
       {/**
       <h2>{props.vocabItems.map(vocab => {
           return <VocabItem key={vocab.id} {...vocab}/>
       })}
       </h2>
     */}
    </div>

)

const MapStateToProps =(state)=> {
    return {
        vocabItems: state.vocabItems
    }
} 

export default connect(MapStateToProps)(VocabItemList)