const initialState = {
    allOrders: [],
    currentOrder: {
        user_id: '',
        orderItems: [],
        total: '0',
        item_count: 0,
        shipped: false,
        shipped_date: null,
        paid: false,
        address_street: '',
        address_city: '',
        address_state: '',
        address_zip: '',
    }
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'GET_ORDERS':
        return {
            ...state,
            allOrders: action.orders
        }

    case 'ADD_NEW_ORDER':
        return {
            ...state,
            allOrders: [...state.allOrders, action.order]
        }

    case 'ADD_TO_CURRENT_ORDER':
        return {
            ...state,
            currentOrder: action.order
        }
  
    default:
        return state;
  
    }
  };
export default orderReducer;