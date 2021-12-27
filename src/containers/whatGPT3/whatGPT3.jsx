import React from 'react';
import Features from '../../components/Features/Features';
import './WhatGPT3.css';
const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="whatgpt3">
            <div className="gpt3__whatgpt3-features">
            <Features Title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">Go beyond your limits</h1>
                <p>KEKKAI GENKAI</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Features Title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Features Title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Features Title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
        </div>
    )
}

export default WhatGPT3
