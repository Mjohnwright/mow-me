import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jobs from "./pages/jobs";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./App.css";

const App = () => (
  <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/login" component={Register} /> 
        <Route exact path="/jobboard" component={jobs} /> 


    </div>
  </Router>
);

export default App;
