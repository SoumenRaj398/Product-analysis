import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
           
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/review">Review</Link>
                <Link to="/dashboards">Dashboards</Link>
                <Link to="/Blogs">Blogs</Link>
            </nav>
            
        </div>
    );
};

export default Header;