/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useNavigate } from "react-router-dom";

const Apps = () => {
  const navigate = useNavigate();
  let handleSignupClick =()=>{
    navigate();  
  }
  return(
    <div style={{width:"60%" , height:"90%" , backgroundColor:"white"}} className="container">
      <div className="row">
        <div className="col-6">
          <img src="Innova.png"  style={{width:"80%"}} alt="Innova Image"/>
        </div>
        <div className="col-6">
          <button style={{width:"100%"}} className="fs-2 m-5 web" onClick={handleSignupClick} >Visit our site Innova</button>
        </div>
        </div>
    </div>
  ) 
};
export default Apps;