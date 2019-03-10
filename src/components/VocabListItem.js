import React from 'react';
import { Link } from 'react-router-dom';

const VocabListItem = ({ dispatch, id, note, difficulty, isShowing, word_de, word_en, example_en, example_de, createdAt }) => (
       <div className="temp-voc-item">
              <Link to={`/edit${id}`}>
                     <h1 className="vocab-edit-link">&#x270E;</h1>
              </Link>

              <h2>{word_de} – {word_en} <span>{isShowing ? "👁" : "🚫"}</span></h2>
              <h2>{example_de}</h2>
              <h2>{example_en}</h2>
              <h2>Note: {note}</h2>
              <h2>Difficulty: {difficulty}</h2>
              <h2>CreatedAt: {createdAt}</h2>
              <br /><br />
              <hr />
              <br />
       </div>
)

export default VocabListItem;