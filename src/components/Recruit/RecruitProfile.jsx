import React from "react";

import Card from 'react-bootstrap/Card';
import Clay from "../../assets/images/Clay.png";


const RecruitProfile = () => {
  return (
    <main className='p-5 bg-black text-white' id="profile" style={{fontFamily:'sans-serif'}}>
<div className="row bg-black d-flex justify-content-center align-items-center">
  
<div className="col-sm-12 col-md-4 col-lg-4 mt-2 p-3">
<Card className="bg-black">
      <Card.Img variant="top" src={Clay} alt="clay" className="rounded-circle border border-info-subtle" />
    </Card>
    </div>
    
    <div className="col-sm-12 col-md-4 col-lg-4 p-4">
   
    <h3  style={{textShadow: '2px 2px 4px #17a2b8' }}>JOE<span className="text-info"><b>BASEBALL</b></span></h3>
   
   <h6 >RECRUIT PROFILE</h6>
 <br></br>
    <Card border="light" className="bg-black">
    <Card.Header className="text-white border border-bottom">RECRUIT<span className="text-info"><b> DEMOGRAPHICS</b></span></Card.Header>
       
      <Card.Body className="text-white" style={{color:'white', fontSize:'12px' }}>

       
          <Card.Text >
          <b>Position:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>Primary:C Secondary: 3B</span>
      <br></br><b>Class:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>2030</span>  <br></br><b>Height:</b><span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>6'0</span> <br></br> <b>Weight:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>230lbs</span>
          </Card.Text>
        </Card.Body>
      </Card>
    
   
    
    </div>  
    <div className="col-sm-12 col-md-4 col-lg-4 p-4">
    <p style={{fontFamily:'sans-serif', fontSize:'14px', color:'white', marginBottom:'1.5rem'}}>Want to contact Joe Baseball? <br></br>

Click the links below to email, message, or call...</p>
<br></br>
    <Card border="light" className="bg-black" >
    <Card.Header className="text-white border border-bottom">CONTACT<span className="text-info"> <b> INFORMATION</b></span></Card.Header>
       
        <Card.Body style={{color:'white', fontSize:'12px', fontFamily:'sans-serif' }}>
       <Card.Text>
          <b>Phone:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>123-456-7890</span>
      <br></br><b>Email:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>email@mail.com</span> 
      <br></br><b>Twitter:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>email@mail.com</span> 
      <br></br><b>Instagram:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>email@mail.com</span> 
    
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
</div>

<div className="row d-flex justify-content-center align-items-center">
<div className="col-sm-12 col-md-6 col-lg-6 p-2">
    <Card border="secondary" >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
          <b>POSITION:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>Primary:C Secondary: 3B</span>
      <br></br><b>CLASS:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>2030</span> HEIGHT: <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>6'0</span> WEIGHT: <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>230lbs</span>

          </Card.Text>
        </Card.Body>
      </Card>
      <br /> 
    </div>  

    <div className="col-sm-12 col-md-4 col-lg-4 p-2">
    <Card border="secondary"  >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
          <b>POSITION:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>Primary:C Secondary: 3B</span>
      <br></br><b>CLASS:</b> <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>2030</span> HEIGHT: <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>6'0</span> WEIGHT: <span style={{color:"darkGray", fontFamily:'sans-serif', fontSize:'14px'}}>230lbs</span>

          </Card.Text>
        </Card.Body>
      </Card>
      <br /> 
    </div>  
</div>
    </main>
  );
};

export default RecruitProfile;