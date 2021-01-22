import React, { useEffect } from 'react'
import {
  Redirect,
  useHistory
} from "react-router-dom";

export default function LandingPage(props) {
  // const showHistory = () => console.log(props.history)
  let history = useHistory();
  useEffect(()=> {
      if (localStorage.token){
        history.push('/storefront')
      } else {
        history.push('/login')
      }
    },[])
  return (
    <div></div>
  )
}