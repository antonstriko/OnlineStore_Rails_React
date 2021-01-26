import { createStore, combineReducers } from 'redux'

// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cartReducer from './cartReducer'
import checkoutReducer from './checkoutReducer'
import orderReducer from './orderReducer'
import productReducer from './productReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    products: productReducer,
    checkout: checkoutReducer,
    order: orderReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

// import { createStore, applyMiddleware } from 'redux';
import thunk from'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk),
        /* other store enhancers if any */ 
    ));
export default store;

// import{ createStore, applyMiddleware, compose }from'redux'
// import thunk from'redux-thunk'
// import DevTools from'./containers/DevTools'
// import reducer from'../reducers'
// const store =createStore(
//  rootReducer,
//  compose(applyMiddleware(thunk),DevTools.instrument())
// );
// export default store;

// const store = createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
// export default store

// export default ({}) => {
//   const store = createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
//   return store;
// }