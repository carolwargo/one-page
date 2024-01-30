import React from 'react';
import RecruitHome from '../../assets/images/OnePage/RecruitHome.png';
import RecruitProfile from '../../assets/images/OnePage/RecruitProfile.png';
import RecruitStats from '../../assets/images/OnePage/RecruitStats.png';
import RecruitDashboard from '../../assets/images/OnePage/RecruitDashboard.png';
import RecruitVideos from '../../assets/images/OnePage/RecruitVideos.png';
import RecruitLeagues from '../../assets/images/OnePage/RecruitLeages.png';


const Demo = () => {

    return (
        <main>
         <div className="container mt-5">
        <div className='row'>
        <h1 className='mb-5'><i>Learn About Our OnePage Website</i></h1>
          <div className='col-sm-12 col-md-6 col-lg-6'
          style={{fontSize:'14px'}}
          >
        <p>This is your time to shine. Show a perspective coach you know what they are looking for by sending them the following:</p>
        <p ><i>*Sample information listed: Baseball Player</i></p>
        <ul style={{fontSize:'12px'}}>
          <li><b>INTRODUCTION</b> - Photo, Name, Sport, Position, Class
                </li>
                <li><b>PROFILE SUMMARY</b>- Primary & Secondary Position, Height, Weight, Bat/Throws, Contact Info
                </li>
                <li><b>METRICS</b>- arm, bat, runtime. 
                </li>
                <li><b>DASHBOARD</b>- GPA, Test Scores, Achievements, Rankings, Summer Team, High School Team
                </li>
                <li><b>VIDEO LIBRARY</b>- Defense, Hitting, Special event (example: MLB Bullpens)
                </li>
                <li><b>CURRENT AFFILIATIONS</b>- Summer Team/Coach, High School Team/Coach
                </li>
        </ul>
          </div>
       
        <div className='col-sm-12 col-md-6 col-lg-6'>
           
        <p>ALL A COLLEGE COACH NEEDS TO KNOW- IN A CUSTOMIZED, SINGLE PAGE APPLICATION</p>
      
        <h3>ONEPAGE WEBSITE- FEATURES</h3>
        </div>
        <div className='row'>
        <h1 className='mb-5'><i>Learn About Our OnePage Website</i></h1>
          <div className='col-sm-12 col-md-6 col-lg-6'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>HOW TO PACKAGE YOUR PROFILE</p>
        <h3>DELIVERY & EFFICIENCY ARE KEY</h3>
        <p></p>
        </div>
        </div>
        <p style={{fontSize:'12px', color:'gray'}}>*Source: https://www.ncsasports.org/recruiting/how-to-get-recruited/college-recruiting-process/recruiting-myths</p>
        </div>
  {/*recruit SITE start */}
 
        <h1 className="mt-5"
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          color:'#304E7C'
        }}>DIGITAL RECRUITING TOOL</h1>
        <p> <i>Why call it a recruiting "TOOL", instead of recruiting "site"? 
          Because, I designed it to be flexible- Capable of rendering either as a complete entity or as individual components. 
  With its responsive design, the tool seamlessly adapts to all screen sizes, ensuring no overflow or loss of content. The graphics and content are easily converted to print media or used on social platforms.</i>
 </p>

        {/*recruit HOMEPAGE start */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="service-body p-5 justify-content-center align-items-center">
              <div className="service-title">
                <h1 
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'#304E7C'
                }}
                >
                  1. LANDING PAGE </h1>
              </div>
              <p className="service-text">
             
The Landing or Home page features a brief introduction of the recruit accompanied by a photo. The pivotal 
element of the page is the "Call to Action" buttons. Serving as a directional 
prompt for the user.</p>
              <p className='text-secondary' style={{fontSize:'12px'}}><i>"CTA FACT- Using a personalized call-to-action (CTA) boosts your conversion rate by 42% more than generic or vague CTAs, or having none at all."</i></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitHome}
              alt="RecruitHome"
              className="mb-2 border border-black"
              style={{ width: "80%", height: "auto" }}
            />
            <p style={{ fontSize: "12px", color:'#304E7C' }}>
              {" "}
              <i>"1. Recruit landing sample page"</i>
            </p>
          </div>
        </div>

        {/*recruit PROFILE start */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="recruit-profile-body p-5 justify-content-center align-items-center">
              <div className="recruit-profile-title">
                <h1
                 style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'#304E7C'
                }}
                >2. PROFILE PAGE </h1>
              </div>
              <p className="recruit-profile-text">
  The Profile Page offers essential information at a glance, including graduation year, 
  primary and secondary positions, height, weight, and batting/throwing stats. 
  It also features clickable contact links for user convenience.</p>
              <p className='text-secondary' style={{fontSize:'12px'}}><i>"CLICKABLE CONTACT LINKS FACT: 64% of User will leave a site if contact information is not easily accessible."</i></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitProfile}
              alt="RecruitHome"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px", color:'#304E7C' }}>
              {" "}
              <i>"2. Recruit profile sample page."</i>
            </p>
          </div>
        </div>

        {/*recruit STATS start */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="recruit-stats-body p-5 justify-content-center align-items-center">
              <div className="recruit-stats-title">
                <h1
                 style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'#304E7C'
                }}
                >3. STATS PAGE </h1>
              </div>
              <p className="recruit-stats-text">
                Recruit stats consist of BAT, ARM, RUN & PERFORMANCE metrics, to include speed & velocity, and average & max.
                Metrics gathered by Trackman with a direct link to Trackman.{" "}
              </p>
              <p className='text-secondary' style={{fontSize:'12px'}}><i>"REPUTABLE AFFILIATE LINKS FACT: Affiliate programs are the top customer acquisition channel for 40% of US merchants."</i></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitStats}
              alt="RecruitStats"
              className="mb-2 border border-black"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px", color:'#304E7C' }}>
              {" "}
              <i>"3. Recruit stats sample page."</i>
            </p>
          </div>
        </div>

        {/*recruit DASHBOARD start */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="recruit-dashboard-body p-5 justify-content-center align-items-center">
              <div className="recruit-dashboard-title">
                <h1  
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'#304E7C'
                }}
                >4. DASHBOARD PAGE </h1>
              </div>
              <p className="recruit-dashboard-text">
                Recruit Dashboard consists of test scores, gpa, academic
                achievement,athletic achievements, extra extra-curriculars,
                summer team & high school teams with a link to contact the
                coach's direct.
              </p>
              <p className='text-secondary' style={{fontSize:'12px'}}><i>"BULLETED-LISTS FACT: Bullet points capture a user’s attention, break up long paragraphs of text and make it easier for users to scan and digest information quickly.
"</i></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitDashboard}
              alt="RecruitDashboard"
              className="mb-2 border border-black"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px", color:'#304E7C' }}>
              {" "}
              <i>"4. Recruit dashboard sample page."</i>
            </p>
          </div>
        </div>

        {/*recruit VIDEOS start */}

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="recruit-videos-body p-5 justify-content-center align-items-center">
              <div className="recruit-videos-title">
                <h1
                 style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'#304E7C'
                }}
                >5. VIDEO LIBRARY PAGE </h1>
              </div>
              <p className="recruit-videos-text">
               This video library page consists of a collection of 3 videos; defense, hitting, MLB bullpens.
               Each video loads independently, and at an efficient rate. The User also has the option to download videos to save, or forward video links to others.
              </p>
              <p className='text-secondary' style={{fontSize:'12px'}}><i>"LOAD TIME FACT: 25% of people will abandon a video that takes 3 or more seconds to load, and 40% will abandon a video that takes 5 or more seconds to load. Not exclusive to a websites."</i></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitVideos}
              alt="RecruitVideos"
              className="mb-2 border border-black"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px", color:'#304E7C' }}>
              {" "}
              <i>"5. Recruit video library sample page."</i>
            </p>
          </div>
        </div>

        {/*recruit LEAGUE AFFILIATION start */}
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center ">
            <div className="recruit-affiliation-body p-5 justify-content-center align-items-center">
              <div className="recruit-affiliation-title">
                <h1
                 style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  color:'#304E7C'
                }}
                >
                  6. LEAGUE AFFILIATION PAGE </h1>
              </div>
              <p className="recruit-affiliation-text">        
  The League Affiliation page displays the current team affiliations; high school team & summer team details include coach & league, and are accompanied by buttons, that are linked to the league website. 
</p>
<p className='text-secondary' style={{fontSize:'12px'}}><i>"LEARN MORE FACT: Providing users with the option to learn more, leads to an increase in conversion. Users who are more informed are more likely to return to your site.
            "</i></p>
            
</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img
              src={RecruitLeagues}
              alt="RecruitLeagues"
              className="mb-2 border border-black"
              style={{
                width: "80%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
            <p style={{ fontSize: "12px", color:'#304E7C' }}>
              {" "}
              <i>"6. Recruit league affiliation sample page."</i>
            </p>
          </div>
          </div>
          </div>
        </main>
    );
        
}

export default Demo;