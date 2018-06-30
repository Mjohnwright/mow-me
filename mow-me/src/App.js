import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
<<<<<<< HEAD
// import Jobs from "./pages/Jobs";
// import Map from "./pages/Map";
import Register from "./pages/Register";
import About from "./pages/About";
import Home from "./pages/Home";
// import Nav from "./components/Nav";
// import Form from "./components/Form";

=======
import Jobs from "./pages/Jobs";
// import Map from "./pages/Map";
import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Nav from "./components/Nav";
// import Form from "./components/Form";
import AllJobs from "./components/AllJobs";
>>>>>>> master
import "./App.css";

const App = () => (
  <Router>
    <div>
      
        {/* <Route exact path="/" component={Home} /> */}
<<<<<<< HEAD
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/about" component={About} />
        {/* <Route exact path="/jobs" component={Jobs} /> */} */}
        {/* <Route exact path="/map" component={Map} /> */} */}
        <Route exact path="/" component={Home} />
=======

        {/* <Route exact path="/home" component={Home} /> */}


        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/" component={Jobs} /> */}

          {/* <Route exact path="/home" component={Home} /> */}

        {/* <Route exact path="/jobs" component={Jobs} /> */} */}

>>>>>>> master

    </div>
  </Router>
);

export default App;
