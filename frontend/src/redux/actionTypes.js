// checkoutReducer -----------------------------------
export const SETUP_CHECKOUT = 'SETUP_CHECKOUT';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_PAYMENT = 'ADD_PAYMENT';
export const RESET_CHECKOUT = 'RESET_CHECKOUT';

// orderReducer -----------------------------------
export const LOADING_ORDERS = 'LOADING_ORDERS';
export const ADD_FETCHED_ORDERS = 'ADD_FETCHED_ORDERS';
export const ADD_NEW_ORDER = 'ADD_NEW_ORDER';
export const SET_ORDER_SORT = 'SET_ORDER_SORT';
export const SET_ORDER_FILTER = 'SET_ORDER_FILTER';
export const UPDATE_FILTERED_ORDERS = 'UPDATE_FILTERED_ORDERS';
export const CHANGE_SELECTED_ORDER = 'CHANGE_SELECTED_ORDER';

// productReducer -----------------------------------
export const LOADING_PRODUCTS = 'LOADING_PRODUCTS'
export const ADD_FETCHED_PRODUCTS = 'ADD_FETCHED_PRODUCTS';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const SET_PRODUCT_SORT = 'SET_PRODUCT_SORT';
export const SET_PRODUCT_FILTER = 'SET_PRODUCT_FILTER';
export const UPDATE_FILTERED_PRODUCTS = 'UPDATE_FILTERED_PRODUCTS';
export const CHANGE_SELECTED_PRODUCT = 'CHANGE_SELECTED_PRODUCT';

// cartReducer -----------------------------------
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_CART_ITEM = 'INCREMENT_CART_ITEM';
export const DECREMENT_CART_ITEM = 'DECREMENT_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CLEAR_CART = 'CLEAR_CART';
export const RESET_CART = 'RESET_CART';

// userReducer -----------------------------------
export const SIGNUP = 'SIGNUP';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';
export const ADD_FETCHED_USERS = 'ADD_FETCHED_USERS';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';