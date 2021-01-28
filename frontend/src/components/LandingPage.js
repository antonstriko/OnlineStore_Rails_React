import React, { useSelector, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/userActions';


export default function LandingPage(props) {
  const dispatch = useDispatch()

  const currentUser = useSelector(state => state.user.currentUser)

  useEffect(()=> {
      if (currentUser.isStoreManager){
        props.history.push('/admin')
      } else {
        props.history.push('/storefront')
      }
    },[])
  return (
    <div>Landing Page</div>
  )
}