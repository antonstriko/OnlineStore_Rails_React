import {ADD_TO_CART, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM, REMOVE_CART_ITEM, TOGGLE_MODAL, CLEAR_CART, RESET_CART} from '../actionTypes'

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
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
      subtotal: cartItem.subtotal - cartItem.price
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

export const clearCart = () => {
  return {type: CLEAR_CART}
}

export const resetCart = () => {
  return {type: RESET_CART}
}