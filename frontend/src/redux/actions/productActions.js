export const isLoadingProducts = () => {
  return {
      type: 'IS_LOADING_PRODUCTS',
      payload: true
  }
}

export const fetchProducts = (data) => {
  debugger
  return {
      type: 'FETCH_PRODUCTS',
      payload: data
  }
}
export const changeCurrentProduct = (product) => {
  return {
      type: 'CHANGE_CURRENT_PRODUCT',
      payload: product
  }
}

export const updateFilteredProducts = (filteredProducts) => {
  return {
      type: 'UPDATE_FILTERED_PRODUCTS',
      payload: filteredProducts
  }
}