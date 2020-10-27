import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const DictionaryPreview = (props)=>{
  {console.log(props.letterlink ,'a')}
  return (
    <div className = "card animate__animated animate__fadeInUp">
      <h2>{props.letter}</h2>
      <p className="dictionary-word">{props.word}</p>
      <div className="readmoreholder">
      <p className = "readmore">
        <Link to={{pathname:`/the_atoz_of_mgmt_pub_web/thedictionary`}}>
        read more</Link>
      </p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flowchart_arrow.svg" alt="arrow"/>
      </div>
    </div>
  );
}



export default DictionaryPreview;
