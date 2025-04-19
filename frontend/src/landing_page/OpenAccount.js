import React from 'react';
import { useNavigate } from "react-router-dom";
function OpenAccount() {
    const navigate = useNavigate();

    const handleSignupClick = () =>{
        navigate("/signup");
    };
    return (  
        <div className='container p-5 mb-5'>
         <div className='row text-center'>
          <h1 className='mt-5 mb-3'>Open a Innova account</h1>
          <p className='text-muted'>   Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.</p>
          <button onClick={handleSignupClick} className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>Sign up Now</button>
         </div>
        </div>
    );
}

export default OpenAccount;