import React from 'react';
import {removeVocabItem} from '../actions/vocabItems';
import {connect} from 'react-redux';

const VocabItem = ({dispatch, id,note, word_de, word_en, example_en, example_de}) =>(
    <div>
       <h1>{word_de} – {word_en}</h1>
       <hr/>
       <h2>{example_de}</h2>
       <h2>{example_en}</h2>
       <h3>Note{note}</h3>
       <button onClick={() => {
              dispatch(removeVocabItem({id}))
        }}>Remove</button>
       </div>
)

export default connect()(VocabItem);