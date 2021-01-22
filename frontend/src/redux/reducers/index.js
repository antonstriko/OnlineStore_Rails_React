import { combineReducers } from 'redux'
import userReducer from './userReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
import checkoutReducer from './checkoutReducer'

const rootReducer = combineReducers({
    //   all of the reducers names
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
    checkout: checkoutReducer,
    order: orderReducer,
});

export default rootReducer
