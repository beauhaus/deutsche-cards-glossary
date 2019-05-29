import React from 'react';
import {connect} from 'react-redux';
import VocabListItem from './VocabListItem';
import selectVocabItems from '../reduxUtils/selectors/vocabSelectors';

export const VocabItemList = (props) =>{
    return (
    <div className="vocab-item-list">
       <h1>Vocab List</h1>
       {props.vocabItems.length === 0?(
        <p>Sorry. I have no words.</p>
       ):
        (<h2>{props.vocabItems.map((vocabItem) => {
            return <VocabListItem key={vocabItem.id} {...vocabItem}/>
         })}
         </h2>)
       }
    </div>
)}

const MapStateToProps =(state)=> {
    return {
        vocabItems: selectVocabItems(state.vocabItems, state.filters)
    }
} 

export default connect(MapStateToProps)(VocabItemList)