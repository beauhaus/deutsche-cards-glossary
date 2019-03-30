import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const VocabListItem = ({ dispatch, id, note, difficulty, isShowing, word_de, word_en, example_en, example_de, createdAt }) => {
// console.log("createdAt prop", createdAt.toString())
/* createdAt comes in as new Date() 
 * (e.g. "Sat Mar 30 2019 12:13:58 GMT-0400 (Eastern Daylight Time)"
 * 
 */
// console.log("crAt: ", moment(createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a"))
createdAt = moment(createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")
// var form = createdAt.format("dddd, MMMM Do YYYY, h:mm:ss a")
// console.log("formed: ", form)

const slicedDateStr = "test";
       return (
              <div className="temp-voc-item">
                     <Link to={`/edit${id}`}>
                            <h1 className="vocab-edit-link">&#x270E;</h1>
                     </Link>
                     <h2>{word_de} – {word_en} <span>{isShowing ? "👁" : "🚫"}</span></h2>
                     <h2>{example_de}</h2>
                     <h2>{example_en}</h2>
                     <h2>Note: {note}</h2>
                     <h2>Difficulty: {difficulty}</h2>
                     <h2>Created: {createdAt}</h2>
                     <br /><br />
                     <hr />
                     <br />
              </div>
       )
}

export default VocabListItem;