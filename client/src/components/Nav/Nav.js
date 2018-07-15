import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
  <div class="navbar transparent">
  <nav className="navbar navbar-expand-lg"> 
  <a class="navbar-brand"  href= "/"> <img src="https://s3.us-east-2.amazonaws.com/devteammembers/yellow-mower.png" height="80"/></a>
  
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <ul className="nav">

    
    <li className="btn btn-outlined btn-success" {...window.location.pathname === "/" ? "active" : ""}>
    <Link to="/">Home</Link>
    </li>
    <li className="btn btn-outlined btn-success" {...window.location.pathname === "/about" ? "active" : ""}>
    <Link to="/about">About</Link>
    </li>
    <li className="btn btn-outlined btn-success" {...window.location.pathname === "/createjob" ? "active" : ""}>
    <Link to="/createjob">Create Job</Link>
    </li>
    <li className="btn btn-outlined btn-success" {...window.location.pathname === "/jobboard" ? "active" : ""}>
    <Link to="/jobboard"><strong>Job Board</strong></Link>
    </li>
    <li className="btn btn-outlined btn-success" {...window.location.pathname === "/users/register" ? "active" : ""}>
    <Link to="/users/register">Register</Link>
    </li>
    <li className="btn btn-outlined btn-success" {...window.location.pathname === "/users/login" ? "active" : ""}>
    <Link to="/users/login">Login</Link>
    </li>

    </ul>
      
    </div>
  </div>
   
  </nav>
  </div>
);

export default Nav;