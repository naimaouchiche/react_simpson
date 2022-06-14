// src/components/DisplayEmployee.jsx
import React from 'react';

function NewQuote({simpson}) {

    return (
        simpson && (<div>
            <div>{simpson.character}</div>
            <img src={simpson.image} alt={simpson.character} />
            <div>{simpson.characterDirection}</div>
            <div>{simpson.quote}</div>
        </div>)
    )
}

export default NewQuote;