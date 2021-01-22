import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Storefront from './components/storefront/Storefront'
import SignupForm from './components/signup/SignupForm'
import LoginForm from './components/login/LoginForm'
import LandingPage from './components/LandingPage'
import Checkout from './components/checkout/Checkout'



function App() {
    
  return (
    <div className="wrapper" >
      <Router>
        <Switch>
          <Route path="/storefront" component={() => { return <Storefront /> }}/>
          <Route path="/login" component={() => { return <LoginForm /> }}/>
          <Route path="/signup" component={() => { return <SignupForm /> }}/>
          <Route path="/checkout" component={() => { return <Checkout /> }}/>
          <Route component={() => <Redirect to='/login' /> }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App
      // <Router>
      //   <Switch>
      //     <Route path="/" component={(routerProps)=> { return <LandingPage {...routerProps}/> }} />
      //     <Route path="/storefront" component={(routerProps) => { return <Storefront {...routerProps} /> }}/>
      //     <Route path="/login" component={(routerProps) => { return <LoginForm {...routerProps}/> }}/>
      //     <Route path="/signup" component={() => { return <SignupForm /> }}/>
      //     <Route path="/checkout" component={() => { return <Checkout /> }}/>
      //   </Switch>
      // </Router>