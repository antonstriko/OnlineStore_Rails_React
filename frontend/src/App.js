import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useDispatch } from 'react-redux';

import Storefront from './components/store/Storefront'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import UserProfile from './components/UserProfile'
import AdminDashboard from './components/admin/AdminDashboard'
import {loginSuccess} from './redux/actions/userActions'
import API from './utils/api';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProfile(){
      if (localStorage?.token){ 
        const {data} = await API.get(`http://localhost:3000/api/v1/profile`)
        dispatch(loginSuccess(data))
      } 
    }
    fetchProfile()
  }, [dispatch])
  
  return (
    <Router>
      <div className="wrapper">
          <Switch>
              <Route exact path="/" component={LoginForm}/>
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