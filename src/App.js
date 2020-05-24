import React from "react";

import Home from "./components/layout/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>










  );
}

export default App;
