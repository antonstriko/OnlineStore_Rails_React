import {IS_LOADING_PRODUCTS, ADD_FETCHED_PRODUCTS, CHANGE_SELECTED_PRODUCT, SET_PRODUCT_SORT, SET_PRODUCT_FILTER, UPDATE_FILTERED_PRODUCTS} from '../actionTypes'

const initialState = {
    allProducts: [],
    filteredProducts: [],
    isLoading: false,
    selectedProduct: null,
    sortTerm: '',
    filterTerm: '',
    searchInput: '',
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING_PRODUCTS:
            return {
                ...state,
                isLoading: true
            }
        case ADD_FETCHED_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                filteredProducts: action.payload,
                isLoading: false
            }
        case CHANGE_SELECTED_PRODUCT:
            return {
                ...state,
                currentProduct: action.payload
            }
        case SET_PRODUCT_SORT:
            return {
                ...state,
                sortTerm: action.payload.sort
            }
        case SET_PRODUCT_FILTER:
            return {
                ...state,
                filterTerm: action.payload.filter
            }
        case UPDATE_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload.filteredProducts
            }
        default:
            return state;
  
    }
  };
export default productReducer;