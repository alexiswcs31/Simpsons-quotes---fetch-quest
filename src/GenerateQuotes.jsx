import React from 'react';

const GenerateQuotes = ({ selectQuote }) => {
    return (
        <div className = "GenerateQuotes">
            <button onClick = { selectQuote }>I want a Simpsons quote</button>
        </div>
    );
};

export default GenerateQuotes;