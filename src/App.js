import React from "react";
import "./index.css";
import items from "./components/items";
import MainHeader from "./components/MainHeader";
import DictionaryPreview from "./components/DictionaryPreview";
import Footer from "./components/Footer";
import "animate.css";

class App extends React.Component {
    constructor(props) {
      super(props);
      // change code below this line
      this.state = {
        topicitems: items,
        searchitems: items,
        results: [],
        clicked: false,
        inputvalue: '',
        filterclicked: false
      };  
    }

    //{/*search function - reach input field return any words that match input field*/}
    inputValue = (e)=>{
      const searchterm = e.target.value;
      //return searchterm;
      this.setState({inputvalue: searchterm})
    }

    searchClick = (e)=>{
      console.log(this.state.inputvalue)
      const newarr = [];
      this.state.searchitems.map(item=>{
      if(item.word.includes(this.state.inputvalue)){
        this.setState({topicitems: []})
        newarr.push(item)
      }
      //console.log(newarr)
    })

    this.setState({results: newarr})
   
    }
 
    handleFilter = (e)=>{
      const newarr = [];
      this.state.searchitems.map(item=>{
        Object.getOwnPropertyNames(item.tags).map(
          (val, idx, array)=>{
            if(e.target.textContent === val && item.tags[val] === true){
              this.setState({topicitems: []})
              newarr.push(item)
              console.log(newarr.length)
            }
        })
      })

      this.setState({results: newarr})
    }

  resetFilters = () =>{
    this.setState({filterclicked: true})
  }

  unreset = () =>{
    if(this.state.filterclicked === true){
      this.setState({filterclicked: false})
    }
  }

    render(){
      const cardletter = [...new Set(items.map(item =>item.letter))];
      const cardletterNew = [...new Set(this.state.results.map(item =>item.letter))];
      const words = items.map(item=> item.word + ', ');

      
      const newitems = cardletter.map(letter=>{
              return (
              <DictionaryPreview 
                letter = {letter.toUpperCase()+'.'}
                word = {words.filter(word=>word.charAt(0) === letter && word)}
              />
              )
      })
      

    const newresults = cardletterNew.map(letter=>{
              return (
              <DictionaryPreview 
                letter = {letter.toUpperCase()+'.'}
                word = {words.filter(word=>word.charAt(0) === letter && word)}
              />
              )
    })

    const seeif = ()=>{
        if(this.state.results.length > 0){
          console.log(this.state.results.length)
          return newresults;
        }else{
          if(this.state.topicitems.length > 0){
            return newitems;
          }
        }
    }
    

      return (
       <div>
       
        <MainHeader 
        theinputvalue = {this.inputValue}
        buttonsearch = {this.searchClick}
        getfilteritem = {this.handleFilter}
        showall = {this.resetFilters}
        />
        <div id="holds-everything" >
          <div id="holder" >
          {/*
             loop through a - z of cardletter and create the cards for the page
             for each letter of the a - z add the corresponding word that starts with the letter. 
          */}
          {this.state.filterclicked ? cardletter.map(letter=>{
              return (
              <DictionaryPreview 
                letterlink = {letter}
                letter = {letter.toUpperCase()+'.'}
                word = {words.filter(word=>word.charAt(0) === letter && word)}
              />
              )
          }) : seeif()}
          
           
          </div>
        </div>
      <Footer />
    </div>
  )
      
  }
 }

export default App;
