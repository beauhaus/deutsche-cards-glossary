import React from 'react';
import { Link } from 'react-router-dom';

const VocabListItem = ({ dispatch, id, note, difficulty, isShowing, word_de, word_en, example_en, example_de, createdAt }) => {
       
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var vocabDate = new Date(createdAt*1000);
// console.log("createdDate", vocabDate)

// var vocabHours = vocabDate.getHours();
// var vocabMinutes = "0" + vocabDate.getMinutes();
// var vocabSeconds = "0" + vocabDate.getSeconds();
// var vocabMonth = vocabDate.getUTCMonth() + 1; //months from 1-12
// var vocabDay = vocabDate.getUTCDate();
// var vocabYear = vocabDate.getUTCFullYear();
// var vocabFormatted_Month_Day_Year = vocabYear + "•" + vocabMonth + "•" + vocabDay;
// var vocabFormattedTime = vocabHours + ':' + vocabMinutes.substr(-2) + ':' + vocabSeconds.substr(-2);
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
                     {/*<h2>CreatedAt: {vocabFormatted_Month_Day_Year+' '+vocabFormattedTime}</h2>*/}
                     {<h2>CreatedAt: {createdAt}</h2>}
                     <br /><br />
                     <hr />
                     <br />
              </div>
       )
}

export default VocabListItem;