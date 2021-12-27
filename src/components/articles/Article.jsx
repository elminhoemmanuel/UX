import React from 'react';
import './Article.css';

const Article = ({ imageurl, date, title }) => {
    return (
        <div className="gpt3__article-blog_container">
            <div className="gpt3__article-blog_container-image">
                <img src={imageurl} alt="blogimage" />
            </div>
            <div className="gpt3__article-blog_content">
                <div>
                 <p>{date}</p>
                 <h3>{title}</h3>
                </div>
                <p>Read the full article</p>
            </div>
        </div>
    )
}

export default Article
