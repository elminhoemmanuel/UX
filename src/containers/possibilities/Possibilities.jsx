import React from 'react';
import './Possibilities.css';
import PossibilityImage from '../../assets/possibility.png'
const Possibilities = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
          <div className="gpt3__possibility-image">
            <img src={PossibilityImage} alt="possibility" />
          </div>
          <div className="gpt3__possibility-content">
              <h4>
                  Request For Access 
              </h4>
              <h1 className="gradient__text">
                    The World and Star Platinum Are The Same Type Of Stand.
              </h1>
              <p>This is my body given for your freedom. This is my blood which was shared for all of mankind. Take all and eat till the day of my return. I am the living bread which has come down from heaven.</p>
              <h4>Abeg Getat</h4>
          </div>
        </div>
    )
}

export default Possibilities
