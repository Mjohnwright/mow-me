import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
// import Home from "./pages/Home";
=======
>>>>>>> MattW
import Jobs from "./pages/Jobs";
import Register from "./pages/Register";
<<<<<<< HEAD
// import Home from "./pages/Home";
// import Nav from "./components/Nav";
// import Form from "./components/Form";
import AllJobs from "./components/AllJobs";
=======
import Home from "./pages/Home";
import About from "./pages/About";
>>>>>>> MattW
import "./App.css";

const App = () => (
  <Router>
    <div>
<<<<<<< HEAD
      
        {/* <Route exact path="/" component={Home} /> */}

        {/* <Route exact path="/home" component={Home} /> */}


        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/" component={Jobs} /> */}

          {/* <Route exact path="/home" component={Home} /> */}

        {/* <Route exact path="/jobs" component={Jobs} /> */} */}


    </div>
=======
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/login" component={Register} /> 
        <Route exact path="/jobboard" component={Jobs} />
        <Route exact path="/about" component={About} /> 
     </div>
>>>>>>> MattW
  </Router>
);

export default App;
