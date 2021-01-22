import { createStore, combineReducers } from 'redux'

import userReducer from './userReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
import checkoutReducer from './checkoutReducer'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
    checkout: checkoutReducer,
    order: orderReducer,
});
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
