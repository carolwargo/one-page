import React from "react";
import "../../App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import ProfileBG from "../../assets/images/OnePage/ProfileBG.png";
import Clay2 from "../../assets/images/Clay2.png";

const DalyBlog = () => {
  return (
    <div className="w3-light-grey">
      {/*NOTES: 1. I certify I am in compliance... 2. Core Classes calculated... 3. Student pledge... 4. Metrics */}
      {/* nav start */}
      <div className="w3-bar w3-black ">
        <a href="/" className="w3-bar-item w3-button">
          <i className="fab fa-facebook-official"></i>
        </a>
        <a href="/" className="w3-bar-item w3-button">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="w3-bar-item w3-button">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="/" className="w3-bar-item w3-button">
          <i className="fas fa-phone"></i>
        </a>
      </div>
      {/* nav end*/}
      {/* start whole page content container */}
      <div className="w3-content" style={{ maxWidth: "1600px" }}>
        {/* start header */}
        <header className="w3-container w3-center w3-padding-48 w3-white">
          <h1 className="w3-xxxlarge">
            <b>DALY WARGO</b>
          </h1>
          <h5>
            VOLLEYBALL RECRUIT <span className="w3-tag">CLASS of 2026 </span>
          </h5>
        </header>
        {/* end header */}

        {/* start image header */}
        <header className="w3-display-container w3-wide" id="home">
          <img
            src={ProfileBG}
            alt="daly-main"
            style={{ maxWidth: "1600px", maxHeight: "1600px" }}
          />
          <div className="w3-display-left w3-padding-large">
            <h1 className="w3-jumbo w3-text-white">
              <b>Daly's Game</b>
            </h1>
            <p className="w3-text-white">
              Subscribe to receive scheduling updates, track my progress, and
              view my accomplishments.{" "}
            </p>
            <h6>
              <button className="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off">
                Subscribe
              </button>
            </h6>
          </div>
        </header>
        {/* end image header */}

        {/* start main layout */}
        <div className="w3-row w3-padding w3-border">
          {/* start main layout entries*/}
          <div className="w3-col l8 s12">
            {/* start entry 1*/}
            <div className="w3-container w3-white w3-margin w3-padding-large">
              {/* start title div*/}
              <div className="w3-center">
                <h3>VIDEO TITLE</h3>
                <h5>
                  Video date, <span className="w3-opacity">Jan. 1,1111</span>
                </h5>
              </div>
              {/* end title div*/}
              {/* start image entry*/}
              <div className="w3-justify">
                <img
                  src={Clay2}
                  alt="clay-square"
                  style={{ width: "100%" }}
                  className="w3-padding-16"
                />
                <p>
                  <strong>Description!</strong> Provide some context... Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  nulla non veniam, quas hic magni eius veritatis eligendi
                  nostrum impedit ab vero, eaque cupiditate temporibus animi quo
                  nisi itaque pariatur.
                </p>

                <p className="w3-left">
                  <button className="w3-button w3-white w3-border">
                    <b>
                      <i className="fa fa-thumbs-up"></i>
                      Like
                    </b>
                  </button>
                </p>
                <p className="w3-right">
                  <button className="w3-button w3-black">
                    <b> Replies</b> <span className="w3-tag w3-white"> 1</span>
                  </button>
                </p>
                <p className="w3-clear"></p>
                <div className="w3-row w3-margin-bottom" id="demo1" style={{}}>
                  <hr />
                  <div className="w3-col l2 m3">
                    <img src={Clay2} alt="clay2" style={{ width: "90px" }} />
                  </div>
                  <div className="w3-col l10 m9">
                    <h4>
                      Coach Joe Blow{" "}
                      <span className="w3-opacity w3-medium"> May 5, 5555</span>
                    </h4>
                    <p>"Great job, Daly...."</p>
                  </div>
                </div>
              </div>
              {/* end entry 1*/}
            </div>
            {/* start main layout entries container*/}
            {/* endmain layout entries*/}
            <hr />

            {/* start entry 2*/}
            <div className="w3-container w3-white w3-margin w3-padding-large">
              {/* start title div*/}
              <div className="w3-center">
                <h3>VIDEO TITLE</h3>
                <h5>
                  Video date, <span className="w3-opacity">Jan. 1,1111</span>
                </h5>
              </div>
              {/* end title div*/}
              {/* start image entry*/}
              <div className="w3-justify">
                <img
                  src={Clay2}
                  alt="clay-square"
                  style={{ width: "100%" }}
                  className="w3-padding-16"
                />
                <p>
                  <strong>Description!</strong> Provide some context... Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  nulla non veniam, quas hic magni eius veritatis eligendi
                  nostrum impedit ab vero, eaque cupiditate temporibus animi quo
                  nisi itaque pariatur.
                </p>

                <p className="w3-left">
                  <button className="w3-button w3-white w3-border">
                    <b>
                      <i className="fa fa-thumbs-up"></i>
                      Like
                    </b>
                  </button>
                </p>
                <p className="w3-right">
                  <button className="w3-button w3-black">
                    <b> Replies</b> <span className="w3-tag w3-white"> 1</span>
                  </button>
                </p>
                <p className="w3-clear"></p>
                <div className="w3-row w3-margin-bottom" id="demo1" style={{}}>
                  <hr />
                  <div className="w3-col l2 m3">
                    <img src={Clay2} alt="clay2" style={{ width: "90px" }} />
                  </div>
                  <div className="w3-col l10 m9">
                    <h4>
                      Coach Joe Blow{" "}
                      <span className="w3-opacity w3-medium"> May 5, 5555</span>
                    </h4>
                    <p>"Great job, Daly...."</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end entry 2*/}

            {/* start entry 3*/}
            {/* start entry 2*/}
            <div className="w3-container w3-white w3-margin w3-padding-large">
              {/* start title div*/}
              <div className="w3-center">
                <h3>VIDEO TITLE</h3>
                <h5>
                  Video date, <span className="w3-opacity">Jan. 1,1111</span>
                </h5>
              </div>
              {/* end title div*/}
              {/* start image entry*/}
              <div className="w3-justify">
                <img
                  src={Clay2}
                  alt="clay-square"
                  style={{ width: "100%" }}
                  className="w3-padding-16"
                />
                <p>
                  <strong>Description!</strong> Provide some context... Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  nulla non veniam, quas hic magni eius veritatis eligendi
                  nostrum impedit ab vero, eaque cupiditate temporibus animi quo
                  nisi itaque pariatur.
                </p>

                <p className="w3-left">
                  <button className="w3-button w3-white w3-border">
                    <b>
                      <i className="fa fa-thumbs-up"></i>
                      Like
                    </b>
                  </button>
                </p>
                <p className="w3-right">
                  <button className="w3-button w3-black">
                    <b> Replies</b> <span className="w3-tag w3-white"> 1</span>
                  </button>
                </p>
                <p className="w3-clear"></p>
                <div className="w3-row w3-margin-bottom" id="demo1" style={{}}>
                  <hr />
                  <div className="w3-col l2 m3">
                    <img src={Clay2} alt="clay2" style={{ width: "90px" }} />
                  </div>
                  <div className="w3-col l10 m9">
                    <h4>
                      Coach Joe Blow{" "}
                      <span className="w3-opacity w3-medium"> May 5, 5555</span>
                    </h4>
                    <p>"Great job, Daly...."</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end entry 2*/}

            {/* end entry 3*/}
          </div>
          {/* end entry col*/}
          <div className="w3-col l4">
            <div className="w3-white w3-margin">
              <div className="w3-container w3-padding w3-black">
                <h4>ATHLETE BIO</h4>
              </div>
              <img
                src={Clay2}
                alt="clay"
                style={{ width: "100%" }}
                className="w3-grayscale"
              />
              <div className="w3-container w3-black">
                <h4>Daly Wargo</h4>
                <p>
                  Introduce yourself...Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Placeat, fuga quidem velit quas autem ut!
                  Aliquam ea unde laborum temporibus architecto consequatur
                  dicta ipsa sapiente repellendus? Commodi consequatur soluta
                  esse!
                </p>
              </div>
            </div>
            <hr />
            {/* end about container */}

            <div className="w3-white w3-margin">
              <div className="w3-container w3-padding w3-black">
                <h4>Athlete Profile</h4>
              </div>
              <ul className="w3-ul w3-hoverable w3-white">
                <li className="w3-padding-16">
                  <img
                    src={Clay2}
                    alt="clay"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <span className="w3-large">Metrics</span>
                  <br />
                  <span>Sed mattis nunc</span>
                </li>
                <li className="w3-padding-16">
                  <img
                    src={Clay2}
                    alt="clay"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <span className="w3-large">Metrics</span>
                  <br />
                  <span>Sed mattis nunc</span>
                </li>
                <li className="w3-padding-16">
                  <img
                    src={Clay2}
                    alt="clay"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <span className="w3-large">Metrics</span>
                  <br />
                  <span>Sed mattis nunc</span>
                </li>
                <li className="w3-padding-16">
                  <img
                    src={Clay2}
                    alt="clay"
                    className="w3-left w3-margin-right"
                    style={{ width: "50px" }}
                  />
                  <span className="w3-large">Metrics</span>
                  <br />
                  <span>Sed mattis nunc</span>
                </li>
              </ul>
            </div>
            <hr />
            {/* end posts */}
            {/* start advertising */}
            <div className="w3-white w3-margin">
              <div className="w3-container w3-padding w3-black">
                <h4>Student Profile</h4>
              </div>
              <div className="w3-container w3-white">
                <div
                  className="w3-container w3-display-container w3-light-grey w3-section"
                  style={{ height: "200px" }}
                >
                  <span className="w3-display-middle">description here</span>
                </div>
              </div>
            </div>
            <hr />
            {/* end advertising */}
            {/* start tags*/}
            <div className="w3-white w3-margin">
              <div className="w3-container w3-margin-bottom w3-padding w3-black">
                <h4 className="">Tags</h4>
              </div>
              <div className="w3-container w3-white">
                <p>
                  <span className="w3-tag w3-black w3-margin-bottom">
                    NCAA{" "}
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Student-Athelete
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Volleyball
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Recruit
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    2026
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Maryland{" "}
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Rankings{" "}
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Passing
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Serve
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Assists
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Blocks
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Ace
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Kills
                  </span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                    Team Captain{" "}
                  </span>
                </p>
              </div>
            </div>
            <hr />
            {/* end tags*/}
            {/* start inspiration*/}
            <div className="w3-white w3-margin">
              <div className="w3-container w3-margin-bottom w3-padding w3-black">
                <h4>Inspiration</h4>
              </div>
              <div className="w3-row-padding w3-white">
                <div className="w3-col s6">
                  <p>
                    <img src={Clay2} alt="clay" style={{ width: "100%" }} />
                  </p>
                  <p>
                    <img src={Clay2} alt="clay" style={{ width: "100%" }} />
                  </p>
                </div>
                <div className="w3-col s6">
                  <p>
                    <img
                      src={Clay2}
                      alt="clay"
                      style={{ width: "100%" }}
                      className="w3-grayscale"
                    />
                  </p>
                  <p>
                    <img src={Clay2} alt="clay" style={{ width: "100%" }} />
                  </p>
                </div>
              </div>
            </div>
            <hr />

            <div className="w3-white w3-margin">
              <div className="w3-container w3-margin-bottom w3-padding w3-black">
                <h4>Follow Me</h4>
              </div>
              <div className="w3-container w3-xlarge w3-padding">
                <i className="fab fa-facebook-official w3-hover-opacity"></i>
                <i className="fab fa-instagram w3-hover-opacity mx-2"></i>
                <i className="fab fa-snapchat w3-hover-opacity"></i>
              </div>
            </div>
            <hr />
            {/* end inspiration*/}
            {/* start subscribe*/}
            <div className="w3-white w3-margin">
              <div className="w3-container w3-margin-bottom w3-padding w3-black">
                <h4>Subscribe</h4>
              </div>
              <div className="w3-container w3-white">
                <p>Enter your e-mail below for update notifications.</p>
                <p>
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Enter e-mail"
                    style={{ width: "100%" }}
                  />
                </p>
                <p>
                  <button type="button" className="w3-button w3-block w3-red">
                    Subscribe
                  </button>
                </p>
              </div>
            </div>
            {/* end subscribe*/}
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end whole page content container */}
      {/* start subscribe model*/}
      <div id="subscribe" className="w3-modal w3-animate-opacity">
        <div className="w3-modal-content" style={{ padding: "32px" }}>
          <div className="w3-container w3-white">
            <i className="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"></i>
            <h2 className="w3-wide">SUBSCRIBE</h2>
            <br />
            <p>
              Join my mailing list to receive updates on the latest blog posts
              and other things.
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Enter e-mail"
              />
            </p>
            <button
              type="button"
              className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom"
              style={{ display: "none" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* end subscribe model*/}

      {/* start footer*/}
      <footer className="w3-container w3-dark-grey" style={{ padding: "32px" }}>
        <a
          href="/"
          className="w3-button w3-black w3-padding-large w3-margin-bottom"
        >
          <i className="fa fa-arrow-up w3-margin-right"></i>To the top
        </a>
        <div className="">
          <div>
            <a href="/" className="w3-bar-item w3-button">
              <i className="fab fa-facebook-official"></i>
            </a>
            <a href="/" className="w3-bar-item w3-button">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="w3-bar-item w3-button">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="/" className="w3-bar-item w3-button">
              <i className="fas fa-phone"></i>
            </a>
          </div>
          <div>
            <p className="text-center w3-margin-bottom w3-padding-large">
              <span className="mx-2">VIDES</span>{" "}
              <span className="mx-2">BIO</span>{" "}
              <span className="mx-2">PROFILE</span>{" "}
              <span className="mx-2">ACCOLADES</span>{" "}
              <span className="mx-2">CONTACT</span>
            </p>
          </div>
        </div>
      </footer>
      {/* end footer*/}
    </div>
  );
};

export default DalyBlog;
