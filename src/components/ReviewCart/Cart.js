import React from 'react';
import "./Cart.css"

const Cart = ({review}) => {

    return (
        
        <div className='product-review'>
         
            <h2 className='customer'>{review.name}</h2>
            <h3 className='review'>{review.comment}</h3>
            <h4>Rating:{review.rating}</h4>
            
        </div>
    );
};

export default Cart;