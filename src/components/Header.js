import React from "react";
import items from "./items";

const Header = ()=>{
  return (
    <header>
      <div id="items_inside_header_holder">
        <h1 className="animate__slideInDown"><a href="/">The A-Z of a Publishing Website</a></h1>
          <div id="input_and_button_holder">
          <input />
          <button id="search">search</button>
        </div>
        <div id="top-nav-div">
          <img id="openMenu-icon" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"/>
          <img id="x-icon" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Sinal_de_vezes.svg" />
        </div>
      <nav id="thenav" className="thenav">
        <ul id="homepage-ul">
          <li><a href="#">dictionary</a></li>
          <li><a href="#">posts</a></li>
          <li><a href="#">resources</a></li>
        </ul>
      </nav>
      </div>
    </header>
  )
};

export default Header;