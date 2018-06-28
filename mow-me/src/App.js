import React, { Component } from 'react';
import Jumbo from "./components/Jumbo";
import Register from "./components/Register";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          < Jumbo />
          < Register />
      </div>
    );
  }
}

export default App;
