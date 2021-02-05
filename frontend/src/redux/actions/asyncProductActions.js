
import {isLoadingProducts, addFetchedProducts, addNewProduct} from './productActions'
// import {useDispatch } from 'react-redux';
// const dispatch = useDispatch()
// export function fetchProducts() {
//   return (dispatch) => {
//     dispatch(isLoadingProducts());
//     fetch('http://localhost:3000/api/v1/products')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         dispatch(addFetchedProducts(data))
//       })
//   };
// }
const configObj = {
  method:'GET',
  headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}`}
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(isLoadingProducts());
    fetch('http://localhost:3000/api/v1/products', configObj)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
          dispatch(addFetchedProducts(data))
      })
  };
}


export function postProduct(product) {
  return (dispatch) => {
    dispatch(isLoadingProducts());
    fetch('http://localhost:3000/api/v1/products')
      .then(response => response.json())
      .then(item => dispatch(addNewProduct(item)));
  };
}

// export function fetchProducts() {
//   return async function(dispatch) {
//     dispatch(isLoadingProducts())
//     const { data } = await axios.get("http://localhost:3000/api/v1/products");
//     dispatch(addFetchedProducts(data));
//   };
// }

// export function postProduct(product) {
//   return async function(dispatch) {
//     const { data } = await axios.post("http://localhost:3000/api/v1/products", product);
//     dispatch(addNewProduct(data));
//   };
// }

