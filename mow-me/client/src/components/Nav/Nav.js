import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
  <div>
    {/* <nav className="nav-navbar nav-navbar-light nav-bg-light">  */}
      <form className="nav-form-inline">
        <button className={window.location.pathname === "/" ? "active" : ""} type="button"><Link to="/">Home</Link></button>
        <button className={window.location.pathname === "/about" ? "active" : ""} type="button"><Link to="/about">About</Link></button>
        <button className={window.location.pathname === "/createjob" ? "active" : ""} type="button"><Link to="/createjob">Create Job</Link></button>
        <button className={window.location.pathname === "/jobboard" ? "active" : ""} type="button"><Link to="/jobboard">Job Board</Link></button>
        <button className={window.location.pathname === "/register" ? "active" : ""} type="button"><Link to="/register">Register</Link></button>
        <button className={window.location.pathname === "/login" ? "active" : ""} type="button"><Link to="/login">Log in</Link></button>
        {/* <div className="nav-collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav-navbar-nav"> */}
            
            {/* <ul className="nav-nav nav-tabs">

              <li className={window.location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
              </li>
              <li className={window.location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
              </li>
              <li className={window.location.pathname === "/createjob" ? "active" : ""}>
              <Link to="/createjob">Create Job</Link>
              </li>
              <li className={window.location.pathname === "/jobboard" ? "active" : ""}>
              <Link to="/jobboard">Job Board</Link>
              </li>
              <li className={window.location.pathname === "/register" ? "active" : ""}>
              <Link to="/register">Register</Link>
              </li>
              <li className={window.location.pathname === "/login" ? "active" : ""}>
              <Link to="/login">Login</Link>
              </li>

            </ul> */}
          {/* </div>       */}
        {/* </div> */}
      </form>
    {/* </nav> */}
  </div>
);

export default Nav;