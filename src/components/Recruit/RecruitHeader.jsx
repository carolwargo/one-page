import React, { useState } from "react";
import { Link } from "react-router-dom";
//import ProfileBG from "../../assets/images/OnePage/ProfileBG.png";
import SampleHeader from "../../assets/images/OnePage/SampleHeader.png";
//import Clay from "../../assets/images/Clay.png";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

const RecruitHeader = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white' sticky>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse show={showBasic ? 'true' : 'false'}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div
       style={{ 
        backgroundImage: `url(${SampleHeader})`, 
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color: 'white'
     }}>
      {/**
      <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '77%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the alpha value for transparency
        zIndex: 1, // Ensure the mask is above the background image
      }}
    ></div>
     */}
              <div className="container">
      <div className="row justify-content-center align-items-center" id="recruit-intro" 
       >
      
          <div className="col-sm-12 col-md-4 col-lg-4 " id="sample">
         </div>
          <div className="col-sm-12 col-md-8 col-lg-8 p-5 text-center justify-content-center align-items-center" id="sample">
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
      
    </header>
  );
};

export default RecruitHeader;
