import React from 'react';
import {connect} from 'react-redux';
import VocabItem from './VocabItem';
import selectVocab from '../selectors/vocabSelectors';


const WordList = (props) =>(
    <div>
       <h1>WordList</h1>
       <h2>{props.vocabItems.map(vocab => {
           return <VocabItem key={vocab.id} {...vocab}/>
       })}
       </h2>
      {/*
        <br/>
        <h2>{props.filters.text}</h2>
    */}
    </div>

)

const MapStateToProps = (state) =>{
    return {
        vocabItems: selectVocab(state.vocabItems, state.filters)
    }
};

export default connect(MapStateToProps)(WordList);

