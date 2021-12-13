import React from 'react';
import './Header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Something With GPT-3 OpenAI</h1>
                <p>It gladdens me to know that Odin prepares for a feast, soon i shall be drinking ale from curved horns. The valkeries summon me home.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get started</button>
                </div>
                <div className="gpt3__header-content__people">
                <img src={people} alt="people" />
                <p>1600 people requested access a visit in the last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                    <img src={ai} alt="ai" />
                </div>
        </div>
    )
}

export default Header
