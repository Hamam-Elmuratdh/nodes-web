import React, { Component } from 'react';
import { Login } from './components/login.jsx'
import { SignUp } from './components/signup.jsx'
import { Home } from './components/home.jsx'
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to CHAT APP</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/login'} className="nav-link"> Login </Link></li>
              <li><Link to={'/signup'} className="nav-link"> Signup </Link></li>
              <li><Link to={'/home'} className="nav-link"> Home </Link></li>

            </ul>
          </nav>
          <hr />
          <Switch>

            <Route exact path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/home' component={Home} />

          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;