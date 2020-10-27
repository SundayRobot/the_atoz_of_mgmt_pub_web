import React from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

class ResponsiveIcon extends React.Component{
  state = {one: true, two: false}

  hellothere = ()=>{
    this.setState((prevState)=>({
      one: !prevState.one,
      two: !prevState.two
    }))
  }

  

  render(){

    const topNavDiv = {
      
      width: "100%",
      marginLeft: "40%",
      zIndex: 9,
      paddingBottom: "20px",
      verticalAlign: "top"
    }

    const thestyle = {
      textAlign: "center",
      zIndex: 1
    }

    return (
      <div>
        <div className="top-nav-div" onClick={this.hellothere}>
        {this.state.one && 
              <img id="openMenu-icon" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="hamburger icon" />
          
        }
        </div>
        <div className="top-nav-div" onClick={this.hellothere}>
         {this.state.two && 
              <img id="x-icon" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Sinal_de_vezes.svg"/>
         }
        </div>
        {!this.state.one && 
        <nav  id="thenav" class="thenav">
          <ul id="homepage-ul" style={thestyle}>
            <li><NavLink to="/thedictionary">dictionary</NavLink></li>
            <li><NavLink to="/theposts">posts</NavLink></li>
            <li><NavLink to="/theresources">resources</NavLink></li>
          </ul>
        </nav>
        }
        <NavLinks stopdisplay = {this.state.two} />
      </div>
    )
  }
}

export default ResponsiveIcon;