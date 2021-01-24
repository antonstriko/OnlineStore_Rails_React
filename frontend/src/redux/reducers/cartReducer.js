import {ADD_TO_CART, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM, REMOVE_CART_ITEM, TOGGLE_MODAL, RESET_CART} from '../actionTypes'
import {Decimal} from 'decimal.js';

const resetCartState = {cartItems: [], subtotal: 0, itemCount: 0, showModal: false}
const cachedCart = JSON.parse(localStorage.cart || "{}") 
const initialState = cachedCart?.items ? cachedCart : resetCartState;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TO_CART:
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
            subTotal: Decimal.add(state.subtotal, action.payload.price).toFixed(2),
            itemCount: state.itemCount + 1
          }
      case INCREMENT_CART_ITEM:
          return {
            ...state,
            cartItems: state.cartItems.map(item => {
              if (item.product_id === action.payload.id) {
                return action.payload
              } else {
                return item
              }
          }),
            subTotal: Decimal.add(state.subtotal, action.payload.price).toFixed(2),
            itemCount: state.itemCount + 1
          }
      case DECREMENT_CART_ITEM:
          return {
            ...state,
            cartItems: state.cartItems.map(item => {
                if (item.product_id === action.payload.id) {
                  return action.payload
                } else {
                  return item
                }
            }),
            subtotal: Decimal.sub(state.subtotal, action.payload.price).toFixed(2),
            itemCount: state.itemCount - 1
          }
      case REMOVE_CART_ITEM:
          return {
            ...state,
            items: state.cartItems.slice().filter(item => item.product_id !== action.payload.id),
            itemCount: state.itemCount - action.payload.qty,
            subtotal: Decimal.sub(state.subtotal, action.payload.subtotal).toFixed(2)
          }
      case TOGGLE_MODAL:
          return {
            ...state,
            showModal: !state.showModal
          }
      case RESET_CART:
          return {
            resetCartState
          }
      default:
          return state;

    }
};
export default cartReducer;


// case 'INCREMENT_QTY':
//   return {
//     ...state,
//     items: state.items.map(item => {
//         if (item.product_id === action.payload.product.product_id) {
//           return action.product
//         } else {
//           return item
//         }
//     }),
//     subTotal: action.subTotal,
//     count: state.count + 1
//   }
// case 'DECREMENT_QTY':
//   return {
//     ...state,
//     items: state.items.map(item => {
//         if (item.product_id === action.product.product_id) {
//           return action.product
//         } else {
//           return item
//         }
//     }),
//     subTotal: action.subTotal,
//     count: state.count - 1
//   }

