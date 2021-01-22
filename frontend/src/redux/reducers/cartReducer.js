
import {ADD_TO_CART, UPDATE_CART_ITEM, UPDATE_CART_SUBTOTAL, REMOVE_CART_ITEM, TOGGLE_MODAL, RESET_CART} from '../actionTypes'


const resetCartState = {
  items: [],
  subTotal: '0',
  count: 0,
  showModal: false
}
const cachedCart = localStorage.getItem('cart')
const initialState = cachedCart ? JSON.parse(localStorage.getItem('cart')) : resetCartState;

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TO_CART:
          return {
            ...state,
            items: [...state.items, action.payload.product],
            //subTotal: state.subTotal + parseFloat(action.product.subTotal),
            subTotal: action.payload.subTotal,
            count: state.payload.count += 1
          }
      case UPDATE_CART_ITEM:
          return {
            ...state,
            items: state.items.map(item => {
                if (item.product_id === action.payload.product.product_id) {
                  return action.payload.product
                } else {
                  return item
                }
            }),
            subTotal: action.payload.subTotal,
            count: state.payload.count
          }
      case UPDATE_CART_SUBTOTAL:
          return {
              ...state,
              subTotal: action.payload
              // subTotal: state.items.map( item => item.subTotal ).reduce( itemReducer, 0)
          }
      case REMOVE_CART_ITEM:
            return {
              ...state,
              items: state.items.filter(item => item.product_id !== action.payload.product.id),
              subTotal: action.payload.subTotal
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

