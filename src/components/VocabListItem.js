import React from 'react';
import { Link } from 'react-router-dom';
import { removeVocabItem } from '../reduxUtils/actions/vocabItems';
import { connect } from 'react-redux';

const VocabListItem = ({ dispatch, _id, note,difficulty, word_de, word_en, example_en, example_de, createdAt }) => (
       <div className="temp-voc-item">
              <Link to={`/edit:${_id}`}>
                     <h1>{word_de} – {word_en}</h1>
              </Link>
              <p>ID:{_id}</p>
              <hr />
              <h2>{example_de}</h2>
              <h2>{example_en}</h2>
              <h3>Note: {note}</h3>
              <h4>Difficulty: {difficulty}</h4>
              <h5>CreatedAt: {createdAt}</h5>
              <button onClick={() => {
                     dispatch(removeVocabItem({ _id }))
              }}>Remove</button>
       </div>
)

export default connect()(VocabListItem);