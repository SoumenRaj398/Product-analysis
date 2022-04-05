import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Homecart from '../Homecart/Homecart';
import "./Home.css"

const Home = () => {
    const [reviews,setReviews] = useReview();
    const navigate = useNavigate();
    const showReviews = () => {
        const path =`/review`;
        navigate(path);

    }

    const addSlice = reviews.slice(0,3)
    return (
        <div>

         <div className ="product">
         <div className='product-title'>
            <h1>Get Your Desired Headphone</h1>
            <h1>World’s Best Selection of Premium Headphones.</h1>
            <h3>Receive live customer support from real humans who love headphones as much as you do.
            Find it cheaper elsewhere? We will match any price from an authorized dealer.
            </h3>
            <button className="btn-info">View All</button>
            </div>

            <div className='product-img'>
            <img src= "headphone.jpg" alt =""></img>
            </div>

         </div>
         <h1 className='review-title'>Valuable Review From Our Customers</h1>
         <div className="homecart">
         {
                addSlice.map(review=><Homecart
                
                review ={review}
                ></Homecart>)
            }
         </div>
         <button onClick ={showReviews}className='btn-review'>See All Reviews</button>
         


        </div>
       
                     

    );
};

export default Home;