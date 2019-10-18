import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import Bubbles from './components/Bubbles';
import "./styles.scss";

function App() {
  // const [colors, setColors] = useState([]);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/bubbles'>Bubbles</Link></li>
        </ul>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path='/bubbles' component={Bubbles}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
