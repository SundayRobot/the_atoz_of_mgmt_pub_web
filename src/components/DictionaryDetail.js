import React from "react";
import DictionaryHeader from "./DictionaryHeader";
import Footer from "./Footer";
import items from "./items";
import NavLinks from "./NavLinks";
import "animate.css";
import ResponsiveIcon from './ResponsiveIcon';
import { Link } from "react-router-dom";

class DictionaryDetail extends React.Component{
  state = { 
    clicked: 0, 
    scrolled: 0, 
    sideletter: '', 
    dictionaryInput: '',
    dictionaryArray: [],
    dictionaryClick: false
    }
  
  handleClick = (index)=>{
    this.setState({clicked: index})
  }
  
  managescroll = (index)=>{
    this.setState({scrolled: index})
  }
  
  //highlight left nav item that matches section being viewed
  componentDidMount = () =>{
      const section = document.getElementsByClassName("section");
      let sections = [];
      let i = 0;
      sections.forEach.call(section, (e, index)=>{
      sections[e.id] = e.offsetTop;
    
    });

    window.addEventListener('scroll', ()=>{
      //removeHeader();
      const sideletter = document.getElementsByClassName("side-letter-letter");
      let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      for (i in sections) {
        let style = "";
        if (sections[i] <= scrollPosition) {
          style = "active" ;//: style = "none";
          let also = sections[i];
          //console.log(sections[i]  )
          document.querySelector(".active").setAttribute("class", "");
          document.querySelector("a[href*=" + i + "]").setAttribute("class", "active");
          this.setState({sideletter: i})
        }
      }
    });
}

//#ul-nav-item > li:nth-child(1) > a


/*"a[href='#new-intervention']"*/

/*
window.onscroll = ()=>{
    //removeHeader();
    const sideletter = document.getElementsByClassName("side-letter-letter");
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sections) {
      let style = "";
      if (sections[i] <= scrollPosition) {
        style = "active" ;//: style = "none";
        let also = sections[i];
        //console.log(sections[i]  )
        document.querySelector(".active").setAttribute("class", "");
        document.querySelector("a[href*=" + i + "]").setAttribute("class", "active");
        this.setState({sideletter: i})
      }
    }
  };
}

*/

//search
handleDictionarySearch = (e)=>{
  this.setState({dictionaryInput: e.target.value})
}

dictionarySearch = (e)=>{
  const dictionaryArr = [];
  const dictionarySearchInput = this.state.dictionaryInput;
  items.map(item=>{
    if(item.word.includes(dictionarySearchInput)){
      dictionaryArr.push(item)
    }
    
  })
  console.log(dictionaryArr)
  this.setState({dictionaryArray : dictionaryArr, dictionaryInput: ''})
  //console.log(this.state.dictionaryArray)
}

//when you click on the 'back' icon on the search results - this will take you to the main dictionary page
backtoDictionaryClick = (e)=>{
      const aim = e.target;
      if(aim){
        this.setState({dictionaryClick: true, dictionaryArray: []})
      }
    }

   
  render(){
    const letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const dl = [...new Set(items.map(item =>item.letter))];
    //this displays the dictionary
    const dictionaryMain = dl.map(dlitem=>{
          return (
            <section key={dl.indexOf(dlitem)} id={dlitem} className="section">
              <h2>{dlitem}</h2>
              {items.map(item=>{
              if(dlitem === item.letter){
              return (
                <div className="word-card animate__animated animate__fadeInUp" key={items.indexOf(item)}>
                  <h3 id="items-word" className="alpha the-word">{item.word}</h3>
                  <span className="describer">{item.type}</span>
                  <p className="main-text">{item.supportingtext}</p>
                  <div className="tag-container">
                    <p className="tag tags-main-title" >TAGS: {Object.getOwnPropertyNames(item.tags).map(i=><span>{i}-</span>)}</p>
                  </div>
                </div>
              );
              }
                  })}
            </section>
          );
        });
    
    //this displays search results
      const searchDictionary = <div className="dictionaryResult">
          <div className = "innerResult">
            {this.state.dictionaryArray.map(item=>{
                return (
                  <div className="word-card">
                    <h3 id="items-word" className="alpha the-word">{item.word}</h3>
                    <span className="describer">{item.type}</span>
                    <p className="main-text">{item.supportingtext}</p>
                    <div className="tag-container">
                      <p className="tag tags-main-title" >TAGS: {Object.getOwnPropertyNames(item.tags).map(i=><span>{i}-</span>)}</p>
                    </div>
                  </div>
                );
                
              })
            }
          <div className = "clickContainer" onClick = {this.backtoDictionaryClick}>
          <p className = "clickContainer-p animate__animated animate__slideInLeft">back to dictionary</p>
            <img className = "clickContainer-img" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg" alt="arrow"/>
          </div>
        </div>
      </div>

    //this says, if search has taken place and the search array has been filled - don"t display the letter on the side of the page - else display it
    const showSideLetterP = ()=>{
      if(this.state.dictionaryArray.length > 0){
         const side = document.querySelector(".container-for-side-letter-and-entry-count");
         side.style.display = "none";
      }
        return (
          <div className="container-for-side-letter-and-entry-count">
            <div className="side-letter"><p id="side-letter-letter" className="side-letter-letter">{this.state.sideletter}</p></div>
            <span id="entry-count" className="entry-count"></span>
        </div>
        );
    }


    const showDictionary = ()=>{
      if(this.state.dictionaryArray.length > 0){
          return searchDictionary;
        }else {
          return dictionaryMain;
            }
    }

    return (
      <div>
        <header>
          <div id="items_inside_header_holder">
            <h1 className="theh1 animate__slideInDown"><Link to="/">The A-Z of Managing a Publishing Website</Link></h1>
         <div id="input_and_button_holder" >
      
      <input type="text" value = {this.state.dictionaryInput} name="input_field" onChange = {this.handleDictionarySearch} />
      <button id="search" onClick = {this.dictionarySearch}>search</button>
    </div>
        
          <ResponsiveIcon />
          <ul id="ul-nav-item">
            {letters.map((item, index)=>{
              let style="";
              this.state.clicked === index ? style = "active" : style = "";
              return <li key={letters.indexOf(item)}className="li-nav-item"><a className={style} href={"#"+item} onClick={this.handleClick.bind(this,index)}>{item}</a></li>
            })}
          </ul>
          </div>
        </header>
        {showSideLetterP()}
        {showDictionary()}

        <Footer />
      </div>
    );
  }
};

export default DictionaryDetail;