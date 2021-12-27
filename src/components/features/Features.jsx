import React from 'react';
import './Features.css';
const Features = ({ Title, text }) => {
    return (
        <div className="gpt3__features-container__features">
           <div className="gpt3__features-container__features-title">
                <div />
                <h1>{Title}</h1>
           </div>
           <div className="gpt3__features-container__features-text">
                <p>{text}</p>
           </div>
        </div>
    )
}

export default Features
