import React from "react";
import NavLinks from "./NavLinks";
import "animate.css";
import ResponsiveIcon from './ResponsiveIcon';
import { Link } from "react-router-dom";

const ResourcesHeader = (props)=>{
  return (
    <header >
      <div id="items_inside_header_holder">
      <h1 className="theh1"><Link to="/the_atoz_of_mgmt_pub_web/">The A-Z of Managing a Publishing Website</Link></h1>
        <div id="input_and_button_holder" >
          <input type="text" name="input_field" onChange = {props.resrouceClick}/>
          <button id="search" onClick={props.resourceSearch}>search</button>
        </div>
      
     <ResponsiveIcon />
      <div id="tags_filter_holder">
        
      </div>
    </div>
    </header>
  )
};

export default ResourcesHeader;