import React from 'react';

const VocabItem = ({word_de, word_en, example_en, example_de}) =>(
    <div>
       <h1>{word_de} – {word_en}</h1>
       <hr/>
       <h2>{example_de}</h2>
       <h2>{example_en}</h2>
       </div>

)

export default VocabItem;

