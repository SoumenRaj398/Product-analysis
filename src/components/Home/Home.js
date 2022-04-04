import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <section>
        <div className='product'>
             <div className='product-info'>
            <h1>Get Your Desired Headphone</h1>
            <h1>Best Collection Of Premium Headphones</h1>
            <h3>Our team of experts has curated the perfect bundles designed
                 to provide a superior listening experience</h3>
                 <button className='btn-info'>View to Select</button>
            
        </div>
        <div className="product-image">
            <img src="Headphone.jpg" alt =""></img>
        </div>
        </div>


        <div className="review-detail">
        <div>
            
            <h1 className='review-title'>Valuable Reviews Of our Beloved Customers</h1>


        </div>
        <div className='review-info'>

        <div className='review-1'> 
            <h2>Michael Clark</h2>
            <p className='paragraph'>The Beats Solo Pro Wireless are very well-built on-ear 
                headphones with a sleek, premium-looking design. 
                They have  a fairly neutral, although slightly excited sound profile</p>
        <p>Rating:</p>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
            
        </div>
        <div className='review-2'> 
            <h2>Jos Butler</h2>
            <p className='paragraph'>The Astro A20 Wireless are decent wireless gaming headphones. 
                They're easy-to-use and have good battery life. 
                They're also fairly comfortable,but can be a bit 
                tight on the head.</p>
                <p>Rating:</p>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>

            
        </div>
        <div className='review-3'> 
            <h2>Daniel Shams</h2>
            <p className='paragraph'>The JBL Vibe 100TWS True Wireless are budget-friendly in-ears. 
                They're quite simple in design but deliver a versatile sound 
                profile that adds just a touch of extra bass to mixes. </p>
                <p>Rating:</p>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
            
        </div>
        <div className='review-4'> 
            <h2>Kane Richardson</h2>
            <p className='paragraph'>The Razer Kaira X for PlayStation are wired gaming headphones that come in console-specific color variants. 
                Although we tested the PlayStation variant, 
                all variants work with any console with an AUX port.</p>
                <p>Rating:</p>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
            
        </div>
        <div className='review-5'> 
            <h2>Gleen Maxwell</h2>
            <p className='paragraph'>The HyperX Cloud Alpha S are the next generation of the HyperX Cloud Alpha. 
                These wired gaming headphones maintain a similarly great build quality and 
                are just as comfortable as their predecessor</p>
                <p>Rating:</p>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
            
        </div>
        <div className='review-6'> 
            <h2>Ricky Ponting</h2>
            <p className='paragraph'>The JBL Tune 760NC Wireless are noise cancelling Bluetooth headphones. 
                They have an ANC feature that can block out mid and treble-range background noise, though it doesn't perform much better than the passive noise isolation in these ranges. 
                The ANC can help block out more bass-heavy background noise.</p>
                <p>Rating:</p>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
            
        </div>

        <button className='btn-review'>SEE ALL REVIEWS</button>

        </div>


        

        </div>
        
        
        </section>
        
       

    );
};

export default Home;