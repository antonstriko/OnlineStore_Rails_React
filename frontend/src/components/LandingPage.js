import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/userActions';


export default function LandingPage(props) {
  let token = localStorage.token !== undefined;
  const dispatch = useDispatch()

  const headers = {headers: {'Authorization': `Bearer ${token}`}};
  const loadCurrentUserProfile = () => {
    if (token !== undefined && headers) {
      fetch('http://localhost:3000/api/v1/profile', headers)
        .then(resp => resp.json())
        .then(data => {
          dispatch(loginSuccess(data))
        })
    } else {
      return null
    }
  }

  useEffect(()=> {
      if (token){
        props.history.push('/storefront')
        loadCurrentUserProfile()
      } else {
        props.history.push('/login')
      }
    },[])
  return (
    <div>Landing Page</div>
  )
}