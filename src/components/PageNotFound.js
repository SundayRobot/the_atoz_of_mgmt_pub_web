import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";


const PageNotFound = ()=>{
  return (
    <div className="pagenotfoundbg">
      <header>
        <div id="items_inside_header_holder">
        <h1 className="theh1 animate__slideInDown"><Link to="/the_atoz_of_mgmt_pub_web/">The A-Z of Managing a Publishing Website</Link></h1>
          
        </div>
      </header>
      <div>
        <p className="pagenotfound">Page Not Found</p>
      </div>
    </div>
  )
}

export default PageNotFound;