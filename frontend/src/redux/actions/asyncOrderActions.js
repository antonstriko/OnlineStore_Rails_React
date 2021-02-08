import {isLoadingOrders, addFetchedOrders, addNewOrder} from './orderActions'
// import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT, ADD_FETCHED_USERS} from '../actionTypes'

const configObj = {
  method:'GET',
  headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}`}
}
// const getUserProfile = async() => {
//   if (localStorage?.token){ 
//     const resp = await fetch(`http://localhost:3000/api/v1/profile`, configObj)
//     const user = await resp.json()
//     dispatch(loginSuccess(user))
//   } else {
//     return
//   }
// }

export function fetchOrders() {
  return (dispatch) => {
    dispatch(isLoadingOrders());
    fetch('http://localhost:3000/api/v1/orders', configObj)
      .then(response => response.json())
      .then(data => dispatch(addFetchedOrders(data)));
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

