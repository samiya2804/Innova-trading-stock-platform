/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function RightSection({imageURL , productName , productDescription, learnMore}) {
    return ( 
        <div className='container  mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                <div>
                    <a href={learnMore} style={{marginRight:"50px" , textDecoration:"none"}}>Learn more<i class="fa fa-long-arrow-right m-2" aria-hidden="true"></i></a>
                </div>
                </div>
                <div className='col-6'>
                    <img  style={{width:"87%"}} src={imageURL} alt=''/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;