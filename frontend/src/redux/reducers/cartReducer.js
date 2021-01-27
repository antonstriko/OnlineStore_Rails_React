import {ADD_TO_CART, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM, REMOVE_CART_ITEM, TOGGLE_MODAL, RESET_CART} from '../actionTypes'

const resetCartState = {
  cartItems: [], 
  subtotal: 0, 
  itemCount: 0, 
  showModal: false
}
const cachedCart = JSON.parse(localStorage.cart || "{}") 
const initialState = cachedCart?.items ? cachedCart : resetCartState;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TO_CART:
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
            subtotal: state.subtotal + action.payload.price,
            itemCount: state.itemCount + 1
          }
      case INCREMENT_CART_ITEM:
          return {
            ...state,
            cartItems: state.cartItems.map(item => {
              if (item.product_id === action.payload.product_id){
                return action.payload
              } else {
                return item
              }
            }),
            subtotal: state.subtotal + action.payload.price,
            itemCount: state.itemCount + 1
          }
      case DECREMENT_CART_ITEM:
          return {
            ...state,
            cartItems: state.cartItems.map(item => {
              if (item.product_id === action.payload.product_id){
                return action.payload
              } else {
                return item
              }
            }),
            subtotal: state.subtotal - action.payload.price,
            itemCount: state.itemCount - 1
          }
      case REMOVE_CART_ITEM:
          return {
            ...state,
            cartItems: state.cartItems.filter(item => item.product_id !== action.payload.product_id),
            itemCount: state.itemCount - action.payload.qty,
            subtotal: state.subtotal - action.payload.subtotal
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

