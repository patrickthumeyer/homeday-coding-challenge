import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import LoginForm from "./pages/login-form";
import UserDetails from "./pages/user-details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user-details" component={LoginForm}></Route>
          <Route exact path="/" component={UserDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
