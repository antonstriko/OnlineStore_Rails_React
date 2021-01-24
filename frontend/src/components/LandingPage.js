import React, { useEffect } from 'react'


export default function LandingPage(props) {
  let token = localStorage.token !== null;
  useEffect(()=> {
      if (token){
        props.history.push('/storefront')
      } else {
        props.history.push('/login')
      }
    },[])
  return (
    <div>Landing Page</div>
  )
}