import React from 'react';
import {connect} from 'react-redux';
import VocabItem from './VocabItem';
import SelectVocabItems from '../selectors/vocabSelectors';


const WordList = (props) =>(
    <div>
       <h1>WordList</h1>
       <h2>{props.vocabItems.map(vocab => (<VocabItem key={vocab.id} {...vocab}/>))}</h2>
      {/*
        <br/>
        <h2>{props.filters.text}</h2>
    */}
    </div>

)

const MapStateToProps = (state) =>{
    return {
        vocabItems: SelectVocabItems(state.vocabItems, state.filters)
    }
};

export default connect(MapStateToProps)(WordList);

