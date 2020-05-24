import React from 'react';
import Login from './component/loginPage';
import Dasboard from './component/dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/dashboard" exact>
            <Dasboard />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;