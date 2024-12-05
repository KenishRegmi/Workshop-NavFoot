import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-col-one">
        <h1>Digital</h1>
        <p>
Dont miss any updates from us. <br />Subscribe to our newsletter and stay up to date
        </p>
        <input type="text" className="enter" placeholder="Enter your email" />
        <br />
        <br />
        <button>Subscribe</button>
      </div>
      <div className="footer-col-two">
        <h1>Download</h1>
        <div>
          <p>Android App</p>
          <p>ios  App</p>
          <p>Company</p>
          <p>Company Desktop</p>
          <p>Projects</p>
          <p>My Tasks</p>
        </div>
      </div>
      <div className="footer-col-three">
        <h1>Help</h1>
        <div>
          <p>FAQ</p>
          <p>Terms and Condition</p>
          <p>Reporting</p>
          <p>Documentation</p>
          <p>Support Policy</p>
          <p></p>

        </div>
      </div>
      <div className="footer-col-four">
        <h1>Follow us</h1>
        <div>
 <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
 <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="" />
 <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
 <img src="https://cdn-icons-png.flaticon.com/128/13051/13051762.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
