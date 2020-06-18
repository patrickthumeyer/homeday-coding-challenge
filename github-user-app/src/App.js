import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import LoginForm from "./pages/login-form/login-form";
import UserDetails from "./pages/user-details/user-details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/results/:user" component={UserDetails}></Route>
          <Route exact path="/" component={LoginForm}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
