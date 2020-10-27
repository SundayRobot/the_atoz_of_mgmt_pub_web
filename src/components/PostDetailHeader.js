import React from "react";
import NavLinks from "./NavLinks";
import "animate.css";
import ResponsiveIcon from './ResponsiveIcon';
import { Link } from "react-router-dom";

const PostDetailHeader = (props)=>{
  return (
    <header >
      <div id="items_inside_header_holder">
        <h1 className="theh1"><Link to="/">The A-Z of Managing a Publishing Website</Link></h1>
        <div id="input_and_button_holder" >
        </div>
      
      <ResponsiveIcon />
      
    </div>
    </header>
  )
};

export default PostDetailHeader;