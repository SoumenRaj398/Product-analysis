import React from 'react';
import "./Homecart.css"

const Homecart = ({review}) => {
    return (
        <div className ="home-cart">
            <h2 className='title'>{review.name}</h2>
            <h3 className='comment'>{review.comment}
            
            </h3>
            <h4 className='rating'>Rating:{review.rating}</h4>
          
            
        </div>
    );
};

export default Homecart;