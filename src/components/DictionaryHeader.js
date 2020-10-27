import React from "react";
import items from "./items";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import ResponsiveIcon from './ResponsiveIcon';

const DictionaryHeader = ()=>{
  const letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return (
    <header>
      <div id="items_inside_header_holder">
        <h1 className="theh1 animate__slideInDown"><Link to="/the_atoz_of_mgmt_pub_web/">The A-Z of Managing a Publishing Website</Link></h1>
          <div id="input_and_button_holder">
            <input />
            <button id="search">search</button>
          </div>
          <div id="top-nav-div">
            <img id="openMenu-icon" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"/>
            <img id="x-icon" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Sinal_de_vezes.svg" />
          </div>
          <ResponsiveIcon />
        </div>
        <ul>
              {letters.map((item, index)=>{
                let style="";
                this.state.clicked === index ? style = "active" : style = "";
                return <li><a className={style} href={"#"+item} onClick={this.handleClick.bind(this,index)}>{item}</a></li>
              })}
        </ul>
    </header>
  )
};

export default DictionaryHeader;