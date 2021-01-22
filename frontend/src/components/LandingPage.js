import React, { useEffect } from 'react'
import {
  Redirect,
  useHistory
} from "react-router-dom";

export default function LandingPage(props) {
  // const showHistory = () => console.log(props.history)
  let history = useHistory();
  let token = localStorage.token || null;
  useEffect((history,token)=> {
      if (token){
        //<Redirect push to="/storefront" />
        history.push('/storefront')
      } else {
        //<Redirect push to="/login" />
        history.push('/login')
      }
    },[])
  return (
    <div>Landing Page</div>
  )
}