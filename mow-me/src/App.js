import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./pages/Register";
// import Nav from "./components/Nav";
// import Form from "./components/Form";

import "./App.css";

const App = () => (
  <Router>
    <div>
      {/* <Wrapper> */}
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Register} />
        {/* <Route exact path="/discover" component={Jobs} /> */} */}
      {/* </Wrapper> */}
    </div>
  </Router>
);

export default App;
