import React from 'react';
import { Link } from 'react-router-dom';
import { removeVocabItem } from '../reduxUtils/actions/vocabItems';
import { connect } from 'react-redux';

const VocabListItem = ({ dispatch, id, note,difficulty, word_de, word_en, example_en, example_de, createdAt }) => (
       <div className="temp-voc-item">
              <Link to={`/edit/:${id}`}>
                     <h1>{word_de} – {word_en}</h1>
              </Link>
              <p>ID:{id}</p>
              
              <h2>{example_de}</h2>
              <h2>{example_en}</h2>
              <h3>Note: {note}</h3>
              <h4>Difficulty: {difficulty}</h4>
              <h5>CreatedAt: {createdAt}</h5>
              <button onClick={() => {
                     dispatch(removeVocabItem({ id }))
              }}>Remove</button>
              <br/><br/>
              <hr/>
              <br/>
       </div>
)

export default connect()(VocabListItem);