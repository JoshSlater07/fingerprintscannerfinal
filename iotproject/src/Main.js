
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Register from "./register";
import PubNubReact from 'pubnub-react';
 
class Main extends Component {
	
  render() {
	  
    return (
	
	 <HashRouter>
	
        <div class="navbar">
		
		
		 
          <h1>UWE Registration System</h1>
		 
	 
		
		  
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </ul>

          <div className="content">
             <Route path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
					 
          </div>
        </div>
		</HashRouter>
    );
  }
}
 
export default Main;