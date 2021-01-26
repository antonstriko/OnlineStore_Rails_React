import {IS_LOADING_PRODUCTS, ADD_FETCHED_PRODUCTS, CHANGE_SELECTED_PRODUCT, SET_PRODUCT_SORT, SET_PRODUCT_FILTER, UPDATE_FILTERED_PRODUCTS} from '../actionTypes'

export const isLoadingProducts = () => {
  return {
      type: IS_LOADING_PRODUCTS,
      payload: true
  }
}

export const fetchProducts = (data) => {
  return {
      type: ADD_FETCHED_PRODUCTS,
      payload: data
  }
}

export const addFetchedProducts = (data) => {
  return {
      type: ADD_FETCHED_PRODUCTS,
      payload: data
  }
}

export const changeSelectedProduct = (product) => {
  return {
      type: CHANGE_SELECTED_PRODUCT,
      payload: product
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