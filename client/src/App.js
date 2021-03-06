import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jobs from "./pages/Jobs/Jobs";
import Register from "./pages/Register/Register";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/About";
import AddJob from "./pages/AddJob/AddJob";
import Map from "./pages/Map/Map";

import "./App.css";

class App extends Component {


  render() {
    return (
      <Router>
      <div>
  
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} /> 
          <Route exact path="/users/login" component={Login} /> 
          <Route exact path="/users/register" component={Register} />
          <Route exact path="/jobboard" component={Jobs} />
          <Route exact path="/about" component={AboutUs} /> 
          <Route exact path="/createjob" component={AddJob} /> 
          <Route exact path="/map" component={Map} /> 
  
       </div>
  
    </Router>
    );
  }
}

export default App;
