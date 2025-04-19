import React from 'react';
import { useNavigate } from "react-router-dom";
function Universe() {
    const navigate = useNavigate();
    const handleSignupClick = () => {
        navigate("/signup");  // Redirects to Signup page
      };
    return ( 
        <div className='container  mt-5'>
            <div className='row text-center'>
                <h1>The Innova Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
               <div className='col-4 p-3 mt-5'>
                <img src='media/images/smallcaseLogo.png' alt=''/>
                <p className='text-small text-muted'>Thematic investment platform</p>
               </div>
               <div className='col-4 p-3 mt-5'>
               <img style={{width:"45%"}} src='media/images/streakLogo.png' alt=''/>
               <p className='text-small text-muted'>Algo & stratergy platform</p>
               </div>
               <div className='col-4 p-3 mt-5'>
               <img style={{width:"50%" , marginBottom:"15px"}} src='media/images/sensibullLogo.svg' alt=''/>
               <p className='text-small text-muted'>Option trading platform</p>
               </div>


             
                <div className='col-4 p-3 text-center mt-5'>
                <img style={{width:"55%"}} src='media/images/zerodhaFundhouse.png' alt=''/>
                <p className='text-small text-muted'>Asset management</p>
               </div>
               <div className='col-4 p-3 text-center mt-5'>
               <img src='media/images/goldenpiLogo.png' alt=''/>
               <p className='text-small text-muted'>Bonds trading platform</p>
               </div>
               <div className='col-4 p-3 mt-5'>
               <img style={{width:"45%"}} src='media/images/dittoLogo.png' alt=''/>
               <p className='text-small text-muted'>insurance</p>
               </div>
               <button onClick={handleSignupClick} className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>Signup Now</button>
                </div>
                </div>
          
     );
}

export default Universe;