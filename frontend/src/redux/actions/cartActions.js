import {ADD_TO_CART, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM, REMOVE_CART_ITEM, TOGGLE_MODAL, RESET_CART} from '../actionTypes'

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      image_url: product.image_url,
      title: product.title,
      qty: 1,
      product_id: product.id,
      price: parseFloat(product.price),
      subtotal: parseFloat(product.price)
    }
  }
}

export const incrementCartItem = (cartItem) => {
  return {
    type: INCREMENT_CART_ITEM,
    payload: {
      ...cartItem,
      qty: cartItem.qty + 1,
      subtotal: cartItem.subtotal + cartItem.price
    }
  }
}

export const decrementCartItem = (cartItem) => {
  return {
    type: DECREMENT_CART_ITEM,
    payload: {
      ...cartItem,
      qty: cartItem.qty - 1,
      subtotal: cartItem.subtotal + cartItem.price
    }
  }
}

export const removeCartItem = (cartItem) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: cartItem
  }
}

export const toggleModal = () => {
  return {type: TOGGLE_MODAL}
}

export const resetCart = () => {
  return {type: RESET_CART}
}

// items: [],
// subTotal: '0',
// count: 0,
// showModal: false

// export const addToCart = (product) => (dispatch) => {
//     const {items, subtotal, count} = getState().cart

//     const productInCart = items.find( item => item.product_id === product.id)
//     let cartItem = {}
     
//     if (productInCart) {
//         let pQty = productInCart.qty + 1;
//         let pSubtotal = qty * productInCart.price;
//         cartItem = {
//             ...productInCart,
//             qty: qty,
//             subTotal : updatedProductSubTotal
//         }
//         dispatch({
//             type: UPDATE_CART_ITEM, 
//             subTotal: subtotal + productInCart.price,
//             product: cartItem
//         })
//     } else {
//         cartItem = {
//             image_url: props.product.image_url,
//             title: props.product.title,
//             qty: 1,
//             product_id: props.product.id,
//             price: props.product.price,
//             subTotal: props.product.price
//         }
//         dispatch({
//             type: ADD_TO_CART, 
//             payload: cartItem
//         })
//     }
//     dispatch({ type: 'ADD_TO_CART', payload: cartItems });
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
// };

// export const removeCartItem = (product) => (dispatch) => {
//     const updatedCartItems = getState().cart.items.slice().filter((item) => item.id !== product.id);
//     dispatch({ type: REMOVE_FROM_CART, payload: updatedCartItems });
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
// };