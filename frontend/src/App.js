import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Storefront from './components/store/Storefront'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import LandingPage from './components/LandingPage'
import UserProfile from './components/UserProfile'
import AdminDashboard from './components/admin/AdminDashboard'

function App() {

  return (
    <Router>
      <div className="wrapper" >
          <Switch>
              <Route exact path="/" component={LoginForm}/>
              <Route path="/landingPage" component={LandingPage}/>
              <Route path="/storefront" component={Storefront}/>
              <Route path="/user_profile" component={UserProfile}/>
              <Route path="/admin" component={AdminDashboard}/>
              <Route path="/login" component={LoginForm}/>
              <Route path="/signup" component={SignupForm}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App