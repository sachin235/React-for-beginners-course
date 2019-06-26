import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="lead ">
      <Router>
        <Navbar />
        <div className="mt-5 container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
}

export default App;
