// import axios from "axios";
import {isLoadingOrders, addFetchedOrders, addNewOrder} from './orderActions'
import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT, ADD_FETCHED_USERS} from '../actionTypes'


export function fetchOrders() {
  return (dispatch) => {
    dispatch(isLoadingOrders());
    fetch('http://localhost:3000/api/v1/orders')
      .then(response => response.json())
      .then(data => dispatch(addFetchedOrders(data)));
  };
}
export function fetchUsers() {
  return (dispatch) => {
    // dispatch(isLoadingOrders());
    fetch('http://localhost:3000/api/v1/users')
      .then(response => response.json())
      .then(data => dispatch({type:ADD_FETCHED_USERS, payload:data }));
  };
}
// const token = localStorage.token || null
// const headers = { 
//   'Authorization': `Bearer ${token}`
// };

// export function fetchOrders() {
//   return async function(dispatch) {
//     dispatch(isLoadingOrders())
//     const { data } = await axios.get("http://localhost:3000/api/v1/orders");
//     dispatch(addFetchedOrders(data));
//   };
// }

// export function postOrder(order) {
//   return async function(dispatch) {
//     const { newOrder } = await axios.post("http://localhost:3000/api/v1/orders", order);
//     dispatch(addNewOrder(newOrder));
//   };
// }

