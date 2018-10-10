import React from 'react';

const DisplayQuotes = ({ quote }) => {
    return (
        <div className="DisplayQuotes">
            <h2>{ quote.character }</h2>
            <img src={ quote.image } alt="image" />
            <h4>{ quote.quote }</h4>
        </div>
    );
};

export default DisplayQuotes;