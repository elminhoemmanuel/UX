import React from 'react';
import './Blog.css';
import Article from '../../components/Articles/Article';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';


const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
          <div className="gpt3__blog-heading">
            <h1 className="gradient__text">If You Get Problem Call God.
             If You Get Business Call Me.</h1>
          </div> 
          <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupA">
              <Article imageurl={blog01} date="25/12/2021" title="AI and Blockchain technologies are the future. And i just want to rule the world" />
            </div> 
            <div className="gpt3__blog-container_groupB">
            <Article imageurl={blog02} date="25/12/2021" title="AI and Blockchain technologies are the future of the world. And i just want to rule the world" />
            <Article imageurl={blog03} date="25/12/2021" title="AI and Blockchain technologies are the future of the world. And i just want to rule the world"/>
            <Article imageurl={blog04} date="25/12/2021" title="AI and Blockchain technologies are the future of the world. And i just want to rule the world" />
            <Article imageurl={blog05} date="25/12/2021" title="AI and Blockchain technologies are the future of the world. And i just want to rule the world" />
            </div>
          </div>
        </div>
    )
}
export default Blog
