/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function Stats() {
    return ( 
       <div className='comtainer p-3 '>
        <div className='row p-5'>
            <div className='col-lg-6 col-sm-12 p-5'>
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                <h2 className='mb-3 fs-4'>Customer-first always</h2>
                <p className='text-muted'>
                That's why 1.3+ crore customers trust Innova with ₹3.5+ lakh crores
                worth of equity investments.
                </p>
                <h2 className='mb-3 fs-4'>No spam or gimmicks</h2>
                <p className='text-muted'> No gimmicks, spam, "gamification", or annoying push notifications.
                High quality apps that you use at your pace, the way you like</p>
                <h2 className=' mb-3 fs-4'>The Zeko universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your needs.</p>
                <h2 className=' mb-3 fs-4'>Do better with money</h2>
                <p className='text-muted'> With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.</p>
            </div>
            <div className='col-lg-6 col-sm-12 p-5'>
                <img src='media/images/ecosystem.png' alt='eco' style={{width:"90%"}}/>
                <div className='text-center p-5'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products<i class="fa fa-long-arrow-right m-2" aria-hidden="true"></i></a>
                    <a href='' style={{textDecoration:"none"}}>Try Kite<i class="fa fa-long-arrow-right m-2" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>

       </div>
     );
}

export default Stats;