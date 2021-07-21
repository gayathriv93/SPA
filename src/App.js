// import logo from './logo.svg';
import './App.css';
// import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Login from './Login.js';
import Signup from './Signup.js';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Dummytable from './Dumtable';
import Jsontable from './Jsontable';



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to='/Login'> Login</Link>
            <Link to='/Signup'> Signup </Link>
            <Link to='/Dumtable'>Dummytable</Link>
            <Link to='/Jsontable'>Jsontable</Link>

          </nav>

          <Switch>
            <Route exact path='/'>
              <div>Home</div>
            </Route>
            <Route path='/Login'>
              <Login></Login>
            </Route>
            <Route path='/Signup'>
              <Signup></Signup>
            </Route>
            <Route path='/Dumtable'>
              <Dummytable></Dummytable>
            </Route>
            <Route path='/Jsontable'>
              <Jsontable></Jsontable>
            </Route>
          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
