import {LOADING_PRODUCTS, 
  ADD_FETCHED_PRODUCTS, 
  ADD_NEW_PRODUCT,
  SET_PRODUCT_SORT, 
  SET_PRODUCT_FILTER, 
  UPDATE_FILTERED_PRODUCTS,
  CHANGE_SELECTED_PRODUCT} from '../actionTypes'

export const isLoadingProducts = () => {
  return {
      type: LOADING_PRODUCTS
  }
}

export const addFetchedProducts = (data) => {
  return {
      type: ADD_FETCHED_PRODUCTS,
      payload: data
  }
}

export const addNewProduct = (data) => {
  return {
      type: ADD_NEW_PRODUCT,
      payload: data
  }
}

export const setProductSort = (sortTerm) => {
  return {
      type: SET_PRODUCT_SORT,
      payload: sortTerm
  }
}

export const setProductFilter = (filterTerm) => {
  return {
      type: SET_PRODUCT_FILTER,
      payload: filterTerm
  }
}

export const updateFilteredProducts = (filteredProducts) => {
  return {
      type: UPDATE_FILTERED_PRODUCTS,
      payload: filteredProducts
  }
}

export const changeSelectedProduct = (product) => {
  return {
      type: CHANGE_SELECTED_PRODUCT,
      payload: product
  }
}