import React from "react";
import NavLinks from "./NavLinks";
import "animate.css";
import ResponsiveIcon from './ResponsiveIcon';
import { Link } from "react-router-dom";

const MainHeader = (props)=>{
  return (
    <header >
      <div id="items_inside_header_holder">
        <h1 className="theh1 animate__animated animate__slideInLeft"><Link to="/">The A-Z of Managing a Publishing Website</Link></h1>
        <div id="input_and_button_holder" >
          <input type="text" name="input_field" onChange = {props.theinputvalue}/>
          <button id="search" onClick={props.buttonsearch}>search</button>
        </div>
     
      <ResponsiveIcon />
      <div id="tags_filter_holder" onClick={props.getfilteritem}>
        <button>skills</button>
        <button>tools</button>
        <button>understanding</button>
        <button>responsibility</button>
        <button>tasks</button>
      </div>
    </div>
    </header>
  )
};

export default MainHeader;