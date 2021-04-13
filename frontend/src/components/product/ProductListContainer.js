import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';

import ProductList from './ProductList'
import ProductSearchBar from './ProductSearchBar'

export default function ProductListContainer(props){
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('')
  const {allProducts, filteredProducts, isLoading, selectedProduct, sortTerm, filterTerm} = useSelector(state => state.products)

  let data = allProducts.slice;
  if (searchInput && searchInput !== '') {
    data = data.filter(product => product.title.includes(searchInput))
  }

  const sortData = () => {
      switch (sortTerm) {
        case 'price':
            return data.sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
        case 'priceDesc':
          return data.sort((a,b) => parseFloat(b.price) - parseFloat(a.price))
        case 'title': {
            return (a, b) => {
              const x = a.title.toLowerCase();
              const y = b.title.toLowerCase();
              let comparison = 0;
              if (x > y) {
                comparison = 1;
              } else if (x < y) {
                comparison = -1;
              }
              return comparison;
            }
        }
        case 'titleDesc': {
          return (a, b) => {
            const x = a.title.toLowerCase();
            const y = b.title.toLowerCase();
            let comparison = 0;
            if (y > x) {
              comparison = 1;
            } else if (y < x) {
              comparison = -1;
            }
            return comparison;
          }
      }
        case 'rating':
          return data.sort((a,b) => a.rating - b.rating)
        case 'ratingDesc':
          return data.sort((a,b) => b.rating - a.rating)
        case 'numOfFavorites':
          return data.sort((a,b) => a.favorites_count - b.favorites_count)
        case 'numOfFavoritesDesc':
          return data.sort((a,b) => b.favorites_count - a.favorites_count)
        default:
            console.log('Failed to sort data')
            break;
      }
  }
  if (sortTerm && sortTerm !)
  // const data = filteredProducts.slice()

  // const comparePrice = (a, b) => {
  //   const x = parseFloat(a.price);
  //   const y = parseFloat(b.price);
  //   let comparisonPrice = 0;
  //   if (x > y) {
  //     comparisonPrice = 1;
  //   } else if (x < y) {
  //     comparisonPrice = -1;
  //   }
  //   return comparisonPrice;
  // }

  // const compareTitle = (a, b) => {
  //   const x = a.title.toLowerCase();
  //   const y = b.title.toLowerCase();
  //   let comparison = 0;
  //   if (x > y) {
  //     comparison = 1;
  //   } else if (x < y) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }

  // if (sortTerm === 'price'){
  //   data.sort(comparePrice);
  // } else if (sortTerm === 'title'){
  //   data.sort(compareTitle);
  // } 
    
  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setSearchInput(e.target.value)
  //   // dispatch({type: 'SEARCH_PRODUCTS', searchBarInput: e.target.value})
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch({type: 'SEARCH_PRODUCTS', searchBarInput: e.target.firstElementChild.lastElementChild.value.toLowerCase()})
  // }
  
  return (
    <React.Fragment>
      <ProductSearchBar setSearchInput={setSearchInput}/>
      <ProductList products={data} isLoading={isLoading}/>
    </React.Fragment>
  )
}