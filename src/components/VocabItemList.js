import React from 'react';
import {connect} from 'react-redux';
import VocabListItem from './VocabListItem';
import selectVocabItems from '../reduxUtils/selectors/vocabSelectors';

const VocabItemList = (props) =>{
    return (
    <div>
       <h1>VocabItemList</h1>
       <h2><em>{props.vocabItems.length}</em></h2>
       <h2>{props.vocabItems.map((vocabItem) => {
           return <VocabListItem key={vocabItem.id} {...vocabItem}/>
        })}
        </h2>
    </div>
)}
// http://localhost:8080/VocabItemDashboard
const MapStateToProps =(state)=> {
    return {
        vocabItems: selectVocabItems(state.vocabItems, state.filters)
    }
} 

export default connect(MapStateToProps)(VocabItemList)