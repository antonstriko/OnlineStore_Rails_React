import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Storefront from './components/Storefront'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
// import LandingPage from './components/LandingPage'
import Checkout from './components/checkout/Checkout'



function App() {
  const loggedIn = localStorage.getItem('token') || null;
  return (
    <div className="wrapper" >
      <BrowserRouter>
        <Switch>
          <Route exact path="/storefront" component={Storefront}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignupForm}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
      // <Router>
      //   <Switch>
      //     <Route path="/" render={(routerProps)=> { return <LandingPage {...routerProps}/> }} />
      //     <Route path="/storefront" render={(routerProps) => { return <Storefront {...routerProps} /> }}/>
      //     <Route path="/login" render={(routerProps) => { return <LoginForm {...routerProps}/> }}/>
      //     <Route path="/signup" component={() => { return <SignupForm /> }}/>
      //     <Route path="/checkout" component={() => { return <Checkout /> }}/>
      //   </Switch>
      // </Router>

      // <Router>
      //   <Switch>
      //     <Route path="/storefront">
      //       <Storefront /> 
      //     </Route>
      //     <Route path="/login">
      //         <LoginForm />
      //     </Route>
      //     <Route path="/signup">
      //         <SignupForm />
      //     </Route>
      //     <Route path="/checkout"> 
      //         <Checkout />
      //     </Route>
      //   </Switch>
      // </Router>

      // <Router>
      //   <Switch>
      //     <Route path="/" render={(routerProps)=> { return <LandingPage {...routerProps}/> }} />
      //     <Route exact path="/storefront" render={(routerProps) => { return <Storefront {...routerProps} /> }}/>
      //     <Route exact path="/login" render={(routerProps) => { return <LoginForm {...routerProps}/> }}/>
      //     <Route  path="/signup" component={() => { return <SignupForm /> }}/>
      //     <Route  path="/checkout" component={() => { return <Checkout /> }}/>
      //   </Switch>
      // </Router>