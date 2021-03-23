import {SETUP_CHECKOUT, 
        ADD_ADDRESS, 
        ADD_PAYMENT, 
        RESET_CHECKOUT} from '../actionTypes'

export const setupCheckout = (currentUser) => {
  console.log('Checkout btn has been clicked')
  return {
    type: SETUP_CHECKOUT,
    payload: {
      user_id: currentUser.id,
      firstname:currentUser.firstname,
      lastname:currentUser.lastname
    }
  }
  // history.push('dashboard/checkout')
}
export const addAddress = (data) => {
  return {
      type: ADD_ADDRESS,
      payload: data
  }
}
export const addPayment = (data) => {
  return {
      type: ADD_PAYMENT,
      payload: data
  }
}
export const resetCheckout = () => {
  return { type: RESET_CHECKOUT }
};

// export const createOrder = (order) => (dispatch) => {
//     fetch("http://localhost:3000/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(order),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch({ type: 'ADD_NEW_ORDER', payload: data });
//         localStorage.clear("cartItems");
//         localStorage.clear("subTotal")
//         localStorage.clear("count")
//         dispatch({ type: 'CLEAR_CHECKOUT' });
//       });
// };

