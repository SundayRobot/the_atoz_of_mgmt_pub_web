import React from "react";
import About from "./About";
import { Link } from "react-router-dom";

const Footer = ()=>{
  return (
    <footer>
      <div className="name_and_copyright_container">
        <p>&copy; 2020</p>
        <p id="footerh5">The A-Z of Managing a Publishing Website</p>
      </div>
        <p id="thefooter"><Link to="/the_atoz_of_mgmt_pub_web/about">About</Link></p>
    </footer>
  );
};

export default Footer;