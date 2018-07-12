import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jobs from "./pages/Jobs/Jobs";
import Register from "./pages/Register/Register";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
import AddJob from "./pages/AddJob/AddJob";


class App extends Component {


  render() {
    return (
      <Router>
      <div>
  
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} /> 
          <Route exact path="/login" component={Login} /> 
          <Route exact path="/register" component={Register} />
          <Route exact path="/jobboard" component={Jobs} />
          {/* <Route exact path="/about" component={About} />  */}
          <Route exact path="/createjob" component={AddJob} /> 
  
       </div>
  
    </Router>
    );
  }
}

export default App;
