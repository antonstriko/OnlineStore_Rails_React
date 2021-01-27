import {ADD_FETCHED_ORDERS, ADD_NEW_ORDER, DECREMENT_CART_ITEM} from '../actionTypes'

const initialState = {
    isLoading: false,
    allOrders: [],
    selectedOrder: {
        user_id: '',
        name: '', 
        item_count: 0,
        orderItems: [],
        total: 0,

        paid: false,
        payment: '',

        shipped: false,
        shipped_date: '',
        address_street: '',
        address_city: '',
        address_state: '',
        address_zip: ''
    }
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {

    case ADD_FETCHED_ORDERS:
        return {
            ...state,
            allOrders: action.payload
        }

    case ADD_NEW_ORDER:
        return {
            ...state,
            allOrders: [...state.allOrders, action.payload]
        }

    case CHANGE_SELECTED_PRODUCT:
        return {
            ...state,
            selectedOrder: action.payload
        }
  
    default:
        return state;
  
    }
  };
export default orderReducer;