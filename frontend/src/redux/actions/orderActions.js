import {LOADING_ORDERS, 
  ADD_FETCHED_ORDERS, 
  ADD_NEW_ORDER, 
  SET_ORDER_SORT, 
  SET_ORDER_FILTER, 
  UPDATE_FILTERED_ORDERS, 
  CHANGE_SELECTED_ORDER} from '../actionTypes'

  // export function fetchProducts() {
  //   return (dispatch) => {
  //     dispatch({type: LOADING_PRODUCTS});
  //     fetch('http://localhost:3000/api/v1/productss')
  //       .then(response => response.json())
  //       .then(items => dispatch({
  //         type: ADD_FETCHED_PRODUCTS,
  //         payload: data
  //     }));
  //   };
  // }
  
  // export function saveProduct() {
  //   return (dispatch) => {
  //     dispatch({type: LOADING_PRODUCTS});
  //     fetch('http://localhost:3000/api/v1/productss')
  //       .then(response => response.json())
  //       .then(item => dispatch({
  //         type: ADD_NEW_PRODUCT,
  //         payload: item
  //     }));
  //   };
  // } 


export const isLoadingOrders = () => {
  return {
      type: LOADING_ORDERS
  }
}

export const addFetchedOrders = (data) => {
  return {
      type: ADD_FETCHED_ORDERS,
      payload: data
  }
}

export const addNewOrder = (order) => {
  return {
      type: ADD_NEW_ORDER,
      payload: order
  }
}

export const setOrderSort = (sortTerm) => {
  return {
      type: SET_ORDER_SORT,
      payload: sortTerm
  }
}

export const setOrderFilter = (filterTerm) => {
  return {
      type: SET_ORDER_FILTER,
      payload: filterTerm
  }
}

export const updateFilteredProducts = (data) => {
  return {
      type: UPDATE_FILTERED_ORDERS,
      payload: data
  }
}

export const changeSelectedOrder = (order) => {
  return {
      type: CHANGE_SELECTED_ORDER,
      payload: order
  }
}