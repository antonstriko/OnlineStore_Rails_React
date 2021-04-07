import axios from 'axios';
import {isLoadingOrders, addFetchedOrders} from './orderActions'
// import {LOGIN_SUCCESS, LOGIN_FAILURE, UPDATE_CURRENT_USER, LOGOUT, ADD_FETCHED_USERS} from '../actionTypes'
// import {resetCheckout} from '../../redux/actions/checkoutActions'
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
  return async function(dispatch) {
    dispatch(isLoadingOrders())
    const { data } = await axios.get("http://localhost:3000/api/v1/orders", configObj);
    dispatch(addFetchedOrders(data));
  };
}

// export function fetchOrders() {
//   return (dispatch) => {
//     dispatch(isLoadingOrders());
//     fetch('http://localhost:3000/api/v1/orders', configObj)
//       .then(response => response.json())
//       .then(data => dispatch(addFetchedOrders(data)));
//   };
// }

// export function handleOrderSubmit(currentUser, cart, paymentData, addressData) {
//   return (dispatch) => {
//     dispatch(isLoadingOrders());
//     fetch('http://localhost:3000/api/v1/orders', {
//     method: 'POST',
//     headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage?.token}`},
//     body: JSON.stringify({
//       user_id: currentUser.id,
//       total: cart.subtotal,
//       item_count: cart.itemCount,
//       paid: true,
//       payment: `VISA ⠀•••• ${paymentData.cardNumber.split("-")[3]}`,
//       address_street: addressData.street,
//       address_city: addressData.city,
//       address_state: addressData.state,
//       address_zip: addressData.zip
//     })
//   })
//   .then(res => res.json())
//   .then(orderCreated => {
//         cart.cartItems.forEach(cartItem => {
//             fetch('http://localhost:3000/api/v1/order_items', {
//               method: 'POST',
//               headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage?.token}`},
//               body: JSON.stringify({
//                 title: cartItem.title,
//                 order_id: orderCreated.id,
//                 product_id: cartItem.product_id,
//                 qty: cartItem.qty,
//                 price: cartItem.price,
//                 subtotal: cartItem.subtotal
//               })
//             })
//         })
//         dispatch(resetCheckout())
//   })
//   };
// }

// const token = localStorage.token || null
// const headers = { 
//   'Authorization': `Bearer ${token}`
// };



// export function postOrder(order) {
//   return async function(dispatch) {
//     const { newOrder } = await axios.post("http://localhost:3000/api/v1/orders", order);
//     dispatch(addNewOrder(newOrder));
//   };
// }

