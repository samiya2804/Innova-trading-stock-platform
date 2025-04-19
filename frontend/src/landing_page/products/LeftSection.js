import React from 'react';
function LeftSection({imageURL , productName , productDescription,tryDemo , learnMore , googlePlay , appStore }) {
    return (  
      <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-4'>
                <img src={imageURL} alt='' style={{width:"87%"}}/>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right mr-2" aria-hidden="true"></i></a>
                <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}>Learn more  <i class="fa fa-long-arrow-right mr-2" aria-hidden="true"></i></a>
                </div>
                <div className='mt-3'>
                <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt=''/></a>
                <a href={appStore} style={{marginLeft:"30px"}}><img src="media/images/appstoreBadge.svg" alt=''/></a>
                </div>
            </div>
        </div>
      </div> 
    );
}

export default LeftSection;