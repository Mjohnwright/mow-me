import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Form from "./components/Form";
import AllJobs from "./components/AllJobs";
import Home from "./pages/Home";
import About from "./pages/About";
import AddJob from "./pages/AddJob";
import "./App.css";

const App = () => (
  <Router>
    <div>

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/login" component={Register} /> 
        <Route exact path="/jobboard" component={Jobs} />
        <Route exact path="/about" component={About} /> 
        <Route exact path="/createjob" component={AddJob} /> 

     </div>
>>>>>>> MattW
  </Router>
);

export default App;
