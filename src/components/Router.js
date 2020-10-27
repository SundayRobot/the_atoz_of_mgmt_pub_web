import React from "react";
import App from "../App.js";

//import NotFound from '../components/Links/NotFound';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DictionaryDetail from "./DictionaryDetail";
import PostsOverview from "./PostsOverview";
import PostDetail from "./PostDetail";
import Resources from "./Resources";
import PageNotFound from "./PageNotFound";
import NavLinks from "./NavLinks";
import About from "./About";


const Router = () =>{
  return (
    <BrowserRouter>
      <div>
        <NavLinks />
        <Switch>
          <Route path="/the_atoz_of_mgmt_pub_web/" component={App} exact/>
          <Route  path="/thedictionary" component={DictionaryDetail}/>
          <Route  path="/theposts" component={PostsOverview}/>
          <Route  path="/thepostsdetailed/:id" component={PostDetail}/>
          <Route  path="/theresources" component={Resources}/>
          <Route  path="/about" component={About}/>
          <Route  path="/" component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;