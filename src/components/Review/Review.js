import React from 'react';
import useReview from '../../hooks/useReview';
import Cart from '../ReviewCart/Cart';

const Review = () => {
    const [reviews,setReviews] = useReview();
    return (

        
        <div className ="cart">





            {
            reviews.map(review => <Cart
            review = {review}
            ></Cart>)
            }   
            
        </div>
    );
};

export default Review;