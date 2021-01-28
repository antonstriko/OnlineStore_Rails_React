import {LOADING_ORDERS, 
    ADD_FETCHED_ORDERS, 
    ADD_NEW_ORDER, 
    SET_ORDER_SORT, 
    SET_ORDER_FILTER, 
    UPDATE_FILTERED_ORDERS, 
    CHANGE_SELECTED_ORDER} from '../actionTypes'

const initialState = {
    isLoading: false,
    allOrders: [],
    filteredOrders: [],
    sortTerm: '',
    filterTerm: '',
    selectedOrder: {
        user_id: '',
        user: null,
        item_count: 0,
        orderItems: [],
        total: 0,
        paid: false,
        payment: '',
        shipped: false,
        date: '',
        address_street: '',
        address_city: '',
        address_state: '',
        address_zip: ''
    }
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {

    case LOADING_ORDERS:
            return {
                ...state,
                isLoading: true
            }
    case ADD_FETCHED_ORDERS:
        return {
            ...state,
            isLoading: false,
            allOrders: action.payload,
            filteredOrders: action.payload
        }
    case ADD_NEW_ORDER:
        return {
            ...state,
            allOrders: [...state.allOrders, action.payload],
            filteredOrders: [...state.allOrders, action.payload]
        }
    case SET_ORDER_SORT:
        return {
            ...state,
            sortTerm: action.payload
        }
    case SET_ORDER_FILTER:
        return {
            ...state,
            filterTerm: action.payload
        }
    case UPDATE_FILTERED_ORDERS:
        return {
            ...state,
            filteredOrders: action.payload
        }
    case CHANGE_SELECTED_ORDER:
        return {
            ...state,
            selectedOrder: action.payload
        }
  
    default:
        return state;
  
    }
  };
export default orderReducer;