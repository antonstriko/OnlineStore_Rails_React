import {LOADING_PRODUCTS, 
    ADD_FETCHED_PRODUCTS, 
    ADD_NEW_PRODUCT,
    SET_PRODUCT_SORT, 
    SET_PRODUCT_FILTER, 
    UPDATE_FILTERED_PRODUCTS,
    CHANGE_SELECTED_PRODUCT} from '../actionTypes'

const initialState = {
    allProducts: [],
    filteredProducts: [],
    isLoading: false,
    selectedProduct: null,
    sortTerm: null,
    filterTerm: '',
    searchInput: '',
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_PRODUCTS:
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
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                allProducts: [...state.allProducts, action.payload],
                filteredProducts: [...state.allProducts, action.payload]
            }
        case SET_PRODUCT_SORT:
            return {
                ...state,
                sortTerm: action.payload
            }
        case SET_PRODUCT_FILTER:
            return {
                ...state,
                filterTerm: action.payload
            }
        case UPDATE_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload
            }
        case CHANGE_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload
            }
        default:
            return state;
  
    }
  };
export default productReducer;