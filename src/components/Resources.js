import React from "react";
import MainHeader from "./MainHeader";
import ResourcesHeader from "./ResourcesHeader";
import Footer from "./Footer";
import mainresources from "./mainresources";
import "animate.css";
import ResponsiveIcon from './ResponsiveIcon';

class Resources extends React.Component{
  state = {
    resourcesInput: '',
    resourcesArray: []
  }


  handleResourcesSearch = (e)=>{
    this.setState({resourcesInput: e.target.value})
  }

  resourcesSearch = (e)=>{
    const resourcesArr = [];
    const resourcesSearchInput = this.state.resourcesInput;
    mainresources.map(resource=>{
      if(resource.resourceTitle.includes(resourcesSearchInput)){
        resourcesArr.push(resource)
      }
      console.log(resourcesArr,'hello')
    })
    
    this.setState({resourcesArray : resourcesArr, resourcesInput: ''})
    //console.log(this.state.resourcesArray)
}

 
  render (){
  //shows all resources
    const resourcesMain =  mainresources.map((resource, index)=>{
               return (
                 <div key={index} className="resource-holder animate__animated animate__slideInUp">
                   <p className="resource-type">{resource.resourceType}</p>
                	<p className="resource-title">{resource.resourceTitle}</p>
                  <p className="resource-source">by {resource.resourceSource}</p>
                	<p className="resource-explainer">{resource.resourceTextExplanation}</p>
                	
              	 </div>
               )
             })
    
   //shows resources from search results on the page 
    const resourcesSearchResults = this.state.resourcesArray.map((resource, index)=>{
               return (
                 <div key={index} className="resource-holder animate__animated animate__slideInUp">
                  <p className="resource-type">{resource.resourceType}</p>
                	<p className="resource-title">{resource.resourceTitle}</p>
                  <p className="resource-source">{resource.resourceSource}</p>
                	<p className="resource-explainer">{resource.resourceTextExplanation}</p>
              	 </div>
               )
             })

//decides which set of resources to display - default or those from search results
const showResources = ()=>{
        if(!this.state.resourcesArray.length > 0){
          return resourcesMain;
        }else {
          return resourcesSearchResults;
        }
    }
      return (
        <div>
          <ResourcesHeader 
          resourceSearch = {this.resourcesSearch}
          resrouceClick = {this.handleResourcesSearch}
          />
          <div id="holds-everything">
          <div id="holder">
            <p className="resource-fyi">Some resources that you might find useful. Please note, none of these are links.</p>
            <div className="resource-main">
             {showResources()}
              
            
            </div>
          </div>
        </div>
      <Footer />
    </div>
    )
  }
}


export default Resources;

