import React from "react";
import '../../App.css'
import '@fortawesome/fontawesome-free/css/all.css';
import ProfileBG from '../../assets/images/OnePage/ProfileBG.png';
import Clay2 from '../../assets/images/Clay2.png'

const DalyBlog = () => {
    return (
        
        <div className="w3-light-grey">

            {/* nav start */}
            <div className="w3-bar w3-black ">
            <a href="/" className="w3-bar-item w3-button"><i className="fab fa-facebook-official"></i></a>
<a href="/" className="w3-bar-item w3-button"><i className="fab fa-instagram"></i></a>
<a href="/" className="w3-bar-item w3-button"><i className="fas fa-envelope"></i></a>
<a href="/" className="w3-bar-item w3-button"><i className="fas fa-phone"></i></a>
            </div>
             {/* nav end*/}
              {/* start whole page content container */}
              <div className="w3-content" style={{maxWidth:'1600px'}}>
  {/* start header */}
<header className="w3-container w3-center w3-padding-48 w3-white">
    <h1 className="w3-xxxlarge"><b>DALY WARGO</b></h1>
<h6>Volleyball Recruit <span className="w3-tag">Class of 2026 </span></h6>
</header>
 {/* end header */}

 {/* start image header */}
 <header className="w3-display-container w3-wide" id="home">
    <img src={ProfileBG} alt="daly-main" style={{maxWidth:'1600px',maxHeight:'1600px'}}/>
<div  className="w3-display-left w3-padding-large">
    <h1 className="w3-jumbo w3-text-white"><b>Daly's Game</b></h1>
    <p>Subscribe to receive scheduling updates, track my progress, and view my accomplishments. </p>
    <h6><button className="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off">Subscribe</button></h6>
</div>
 </header>
 {/* end image header */}
{/* start main layout */}
<div className="w3-row w3-padding w3-border">
{/* start main layout entries*/}
<div className="w3-col l8 s12">
{/* start main layout entries container*/}
<div className="w3-container w3-white w3-margin w3-padding-large">
    {/* start title div*/}
    <div className="w3-center">
<h3>Section Title</h3>
<h5>Section Title Description, <span className="w3-opacity">Jan. 1,1111</span></h5>
    </div>
 {/* end title div*/}
 {/* start image entry*/}
 <div className="w3-justify">
<img src={Clay2} alt="clay-square" style={{width:'100%'}} className="w3-padding-16"/>
<p><strong>Lorem!</strong>Lorem ipsum dolor sit amet, 
consectetur adipisicing elit. Perspiciatis expedita 
pariatur, blanditiis quae, nesciunt est nulla 
dolores corrupti consequatur harum in a voluptatibus 
fugiat, error ipsam! Quaerat, dolore? Sequi, neque!</p>
 
 <p className="w3-left"><button className="w3-button w3-white w3-border">
    <b>
        <i className="fa fa-thumbs-up"></i> 
        Like</b>
 </button>
 </p>
<p className="w3-right">
    <button className="w3-button w3-black">
       <b> Replies</b> <span className="w3-tag w3-white"> 1</span>
        </button></p>
        <p className="w3-clear"></p>
          <div className="w3-row w3-margin-bottom" id="demo1" style={{}}>
            <hr/>
              <div className="w3-col l2 m3">
                <img src={Clay2} alt="clay2" style={{width:"90px"}}/>
              </div>
              <div className="w3-col l10 m9">
                <h4>George <span className="w3-opacity w3-medium">May 3, 2015, 6:32 PM</span></h4>
                <p>Great blog post! Following</p>
              </div>
</div>
 </div>
 {/* end image entry*/}
</div>
{/* start main layout entries container*/}
</div>
{/* endmain layout entries*/}
<hr />
</div>
{/* end main layout */}
              </div>
          {/* end whole page content container */}
        </div>
    );
    }

export default DalyBlog;    