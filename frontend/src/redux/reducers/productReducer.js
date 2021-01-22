
const initialState = {
    allProducts: [],
    filteredProducts: [],
    isLoading: false,
    currentProduct: null,
    sortTerm: '',
    filterTerm: '',
    searchInput: '',
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_LOADING_PRODUCTS':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                allProducts: action.payload,
                filteredProducts: action.payload,
                isLoading: false
            }

        case 'CHANGE_CURRENT_PRODUCT':
            return {
                ...state,
                currentProduct: action.payload
            }

        case 'SET_PRODUCT_SORT':
            return {
                ...state,
                sortTerm: action.payload.sort,
                filteredProducts: action.payload.filteredProducts
            }

        case 'SET_PRODUCT_FILTER':
            return {
                ...state,
                filterTerm: action.payload.filter,
                filteredProducts: action.payload.filteredProducts
            }
        case 'UPDATE_FILTERED_PRODUCTS':
            /* instead of sending filtered products to redux store
            add this to productListContainer:
            const products = useSelector(state=> state.products.all)
            const [filter, setFilter] = useState()
            const [sortTerm, setSortTerm] = useState()
            let filteredProducts;
            switch(filter) {
                case 'category': return filteredProducts = products.filter(p=> p.category === filter)
                }
            }            
            */
            return {
                ...state,
                filteredProducts: action.payload.filteredProducts
            }
        case 'SET_PRODUCT_FILTER':
            return {
                ...state,
                filterTerm: action.payload.filter,
                filteredProducts: action.payload.filteredProducts
            }
    
        default:
            return state;
  
    }
  };
export default productReducer;