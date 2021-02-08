import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useDispatch } from 'react-redux';

import Storefront from './components/store/Storefront'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import LandingPage from './components/LandingPage'
import UserProfile from './components/UserProfile'
import AdminDashboard from './components/admin/AdminDashboard'
import {loginSuccess} from './redux/actions/userActions'

function App() {
  const dispatch = useDispatch();
  const configObj = {
    method:'GET',
    headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}`}
  }
  const getUserProfile = async() => {
    if (localStorage?.token){ 
      const resp = await fetch(`http://localhost:3000/api/v1/profile`, configObj)
      const user = await resp.json()
      dispatch(loginSuccess(user))
    } else {
      return
    }
  }

  useEffect( () => {
    getUserProfile()
  }, []) // run if props.user changes
  
  return (
    <Router>
      <div className="wrapper">
          <Switch>
              <Route exact path="/" component={LoginForm}/>
              {/* <Route path="/home" component={LandingPage}/> */}
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