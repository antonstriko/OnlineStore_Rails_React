// checkoutReducer -----------------------------------
export const SETUP_CHECKOUT = 'SETUP_CHECKOUT';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_PAYMENT = 'ADD_PAYMENT';
export const CLEAR_CHECKOUT = 'CLEAR_CHECKOUT';

// orderReducer -----------------------------------
export const GET_ORDERS = 'GET_ORDERS';
export const ADD_NEW_ORDER = 'ADD_NEW_ORDER';
export const SET_ORDER_FILTER = 'SET_ORDER_FILTER';
export const SET_ORDER_SORT = 'SET_ORDER_SORT';

// productReducer -----------------------------------
export const IS_LOADING_PRODUCTS = 'IS_LOADING_PRODUCTS'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const CHANGE_CURRENT_PRODUCT = 'CHANGE_CURRENT_PRODUCT';
export const SET_PRODUCT_SORT = 'SET_PRODUCT_SORT';
export const SET_PRODUCT_FILTER = 'SET_PRODUCT_FILTER';

// cartReducer -----------------------------------
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_CART_ITEM = 'INCREMENT_CART_ITEM';
export const DECREMENT_CART_ITEM = 'DECREMENT_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const RESET_CART = 'RESET_CART';

// userReducer -----------------------------------
//export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';