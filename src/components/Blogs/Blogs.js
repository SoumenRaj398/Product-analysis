import React from 'react';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className='question'>
        <div className='context'>
            <h1>What is Context API</h1>
            <h3>Basically it is a React API that can solve a
                 lot of problems that modern applications face
                  related to state management and how they’re 
                  passing state to their components. Instead of 
                  installing a state management library in our 
                  project that will eventually cost our project 
                  performance and increase our bundle size, 
                  we can easily go with Context API and be 
                  fine with it.</h3>
        </div>
        <div className='semantic'>
            <h1>What is Semantic Tag</h1>
            <h3>Semantic tags allow us to add meaning to our markup 
                so that search engines, screen readers, and web browsers 
                can make sense of it. By default, when a user agent reads our 
                content it doesn’t understand the context and meaning. 
                Semantic HTML tags let us serve structured content to our users,
                 which is especially important for on-page SEO and accessibility.</h3>
        </div>
        
    </div>
       
    );
};

export default Blogs;