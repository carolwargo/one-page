import React from "react";
import SampleHeader from "../../assets/images/OnePage/SampleHeader.png";
import Clay from "../../assets/images/Clay.png";
//import Clay from "../../assets/images/Clay.png";
import ProfileBG from "../../assets/images/OnePage/ProfileBG.png";
import { Link } from "react-router-dom";

import { FaSquarePhone } from "react-icons/fa6";
//import { MdEmail } from "react-icons/md";
//import { FaSquareXTwitter } from "react-icons/fa6";
//import { TiSocialInstagram } from "react-icons/ti";


import "../../App.css";
const SiteSample = () => {
  return (
    <main className="site-sample justify-content-center align-items-center">
      <div
       style={{ 
        backgroundImage: `url(${SampleHeader})`, 
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color: 'white'
     }}>
   
              <div className="container">
      <div className="row justify-content-center align-items-center" id="recruit-intro" 
       >
      
          <div className="col-sm-12 col-md-6 col-lg-6 " id="sample">
         </div>
          <div className="col-sm-12 col-md-6 col-lg-6 p-5 text-center justify-content-center align-items-center" id="sample">
            <h1 style={{textShadow: '2px 2px 4px #17a2b8' }}>JOE <br></br><span className="text-info"><b>BASEBALL</b></span></h1>
            <h6 style={{ textShadow: '2px 2px 2px #000000' }}>HIGH SCHOOL BASEBALL RECRUIT<br></br>CATCHER | CLASS OF 2030</h6>
            <br></br>
            <br></br>
            <div className="text-center">
            <p style={{fontFamily:'sans-serif', fontSize:'12px',  textShadow: '2px 2px 2px #000000' }}>WHAT WOULD YOU LIKE TO DO...<br></br>Click to choose your path.</p>
          <Link to="/demo">
              <button type="button" className="btn btn-outline-info btn-sm mx-2 px-3">
                Get Started
              </button>
            </Link>
            <Link to="/site-sample">
              <button type="button" className="btn btn-info btn-sm mx-2 px-3">
                site sample
              </button>
            </Link>
            </div>
          </div>
        </div>
        </div>
    
    </div>
      
        <div id="profile" 
        style={{ 
            backgroundImage: `url(${ProfileBG})`, 
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        color: 'white'
         }}>
    <div className="container p-3">    
            <div className="row">
            <h1 className="mt-2 mb-4 text-center ">RECRUIT PROFILE</h1>
          
        <div className="col-sm-12 col-md-6 col-lg-6 mb-2 d-flex justify-content-center align-items-center" id="profile">
  <img
    src={Clay}
    alt="user-profile"
    className="rounded-circle img-fluid border border-3 border-info"
    style={{ width: "85px", height: "85px" }}
  />
 <h1 className="px-4" style={{textShadow: '2px 2px 4px #17a2b8' }}>JOE <br></br><span className="text-info"><b>BASEBALL</b></span></h1>
            
</div>
   <br></br>
   <br></br>
      <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center" id="profile">
      <h6 className=""><b>POSITION:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>Primary:C Secondary: 3B</span>
      <br></br><b>CLASS:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>2030</span> HEIGHT: <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>6'0</span> WEIGHT: <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>230lbs</span></h6>

      </div>
    </div>
    <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center p-3 px-3">
    
      <p style={{fontFamily:'sans-serif', fontSize:'14px'}}>Want to contact Joe Baseball? <br></br>

Click the links below to email, message, or call...</p><br></br>
<p><FaSquarePhone/></p>
<p><FaSquarePhone/></p>
  
    </div>
    </div>  
    </div>
    
    </div>
    </main>
  );
};

export default SiteSample;
