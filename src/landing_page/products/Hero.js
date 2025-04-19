/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function Hero() {
    return ( 
        <div className='container border-bottom mb-5'>
            <div className='row  p-5 mt-5 mb-5 text-center'>
                <h1 className=' text-center mb-4'>
                 Technology
                </h1>
                <h3 className='text-muted'>Sleek,modern and intutive trading platforms</h3>
                <p>Check out our <a style={{ textDecoration: "none" }} 
                href='http://localhost:3000/'>investment offerings <i class="fa fa-long-arrow-right mr-2" aria-hidden="true"></i></a></p>
                </div>
                </div>
     );
}

export default Hero;