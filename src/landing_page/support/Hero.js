/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
        <div className=' p-3 ' id='supportWrapper'>
            <h4>Support portal</h4>
            <a href=''>track Tickets</a>
        </div>
        <div className='row p-3 m-3'>
        <div className=' col-6 p-3 '>
            <h1 className='fs-3'> Search for an answer or browse help topics to create a ticket</h1>
           <input type='text' placeholder='Eg. how do I activate F&O,why is my order getting rejected' />
           <br/>
           <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className=' col-6 p-3'>
            <h1 className='fs-3'>Featured</h1>
            <ol>
               <li className='mb-3'>
            <a  href="">Current Takeovers and Delisting - March 2025</a></li>
            <li>
            <a href="">Latest Intraday leverages - MIS & CO</a>
           </li> 
            </ol>
        </div>
        </div>
       
        </section>
     );
}

export default Hero;