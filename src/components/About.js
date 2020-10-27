import React from "react";
import PostDetailHeader from "./PostDetailHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <PostDetailHeader />
      <div id="holds-everything">
        <div id="holder">
          <div className="aboutpage">
            <h4>About</h4>
            <div className="about-text">
              <p>Working as a Website Manager, for a publishing for website, learning a few things. </p><p>This site is some of those things and a work in progress. 
                Have a read through and thank you for visiting.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
