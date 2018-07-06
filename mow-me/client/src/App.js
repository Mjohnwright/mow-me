import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import AddJob from "./pages/AddJob";
import "./App.css";

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
      <div>
  
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} /> 
          <Route exact path="/login" component={Register} /> 
          <Route exact path="/jobboard" component={Jobs} />
          <Route exact path="/about" component={About} /> 
          <Route exact path="/createjob" component={AddJob} /> 
  
       </div>
  
    </Router>
    );
  }
}

export default App;
