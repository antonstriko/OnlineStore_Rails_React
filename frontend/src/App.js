import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Storefront from './components/Storefront'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import LandingPage from './components/LandingPage'
import AdminDashboard from './components/dashboard/AdminDashboard'

function App() {

  return (
    <Router>
      <div className="wrapper" >
          <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/storefront" component={Storefront}/>
              <Route path="/login" component={LoginForm}/>
              <Route path="/signup" component={SignupForm}/>
              <Route path="/admin" component={AdminDashboard}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App