import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const VocabListItem = ({ id, note, difficulty, isShowing, word_de, word_en, example_en, example_de, createdAt }) => {

createdAt = moment(createdAt).format("M•D•YY ddd h:mma")
       return (
              <div className="temp-voc-item">
                     <Link to={`/edit${id}`}>
                            <h1 className="vocab-edit-link">&#x270E;</h1>
                     </Link>
                     <p>{word_de} – {word_en} <span>{isShowing ? "👁" : "🚫"}</span></p>
                     <p>{example_de}</p>
                     <p>{example_en}</p>
                     <p>Note: {note}</p>
                     <p>Difficulty: {difficulty}</p>
                     <p>{createdAt}</p>
              </div>
       )
}

export default VocabListItem;