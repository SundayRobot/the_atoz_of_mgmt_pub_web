
import React from "react";
import { NavLink } from "react-router-dom";


const Navlinks = (props)=>{
  const hidenav = {
    display: "none"
  }
  return (
    <div id="thenav" className="thenav" >
    {!props.stopdisplay &&
    <nav >
         <ul id="homepage-ul" className="animate__animated animate__slideInRight">
          <li><NavLink to="/the_atoz_of_mgmt_pub_web/thedictionary">dictionary</NavLink></li>
          <li><NavLink to="/the_atoz_of_mgmt_pub_web/theposts">posts</NavLink></li>
          <li><NavLink to="/the_atoz_of_mgmt_pub_web/theresources">resources</NavLink></li>
        </ul>
      </nav>
    }
    </div>
  );
}

export default Navlinks;