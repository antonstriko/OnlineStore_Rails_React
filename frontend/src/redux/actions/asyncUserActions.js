// import axios from 'axios'
// import {isLoadingProducts, addFetchedProducts, addNewProduct} from './productActions'
import {ADD_FETCHED_USERS} from '../actionTypes'

export function fetchUsers() {
  return (dispatch) => {
    // dispatch(isLoadingOrders());
    fetch('http://localhost:3000/api/v1/users')
      .then(response => response.json())
      .then(data => dispatch({type:ADD_FETCHED_USERS, payload:data }));
  };
}