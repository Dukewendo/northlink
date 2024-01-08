import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Users} from "./pages/users";
import {Home} from "./pages/home";
import {User} from "./pages/users/User";

const router = (
  <Router>
    <Switch>
      <Route exact path="/users" component={Users} />
      <Route exact path="/" component={Home} />
      <Route path="/users/:id" component={User} />
    </Switch>
  </Router>
);

ReactDOM.render(router, document.getElementById("app"));