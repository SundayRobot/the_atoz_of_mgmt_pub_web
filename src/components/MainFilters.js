import React from "react";

const MainFilters = (props)=>{
  return (
    <div id="tags_filter_holder">
      <button onClick = {props.getfilteritem}>skills</button>
      <button onClick = {props.getfilteritem}>tools</button>
      <button>understanding</button>
      <button>responsibility</button>
      <button>tasks</button>
  </div>
  )
};

export default MainFilters;