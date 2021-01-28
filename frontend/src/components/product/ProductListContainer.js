import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';

import {AppBar, CssBaseline, Drawer, Container, Toolbar, List, Typography, Divider, IconButton, Badge, Modal, Backdrop, Fade, } from '@material-ui/core';

import ProductList from './ProductList'
import ProductSearchBar from './ProductSearchBar'

export default function ProductListContainer(props){
  const [searchInput, setSearchInput] = useState('')
  const {allProducts, filteredProducts, isLoading, selectedProduct, sortTerm, filterTerm} = useSelector(state => state.products)


  const dispatch = useDispatch();

  let searchBar = useSelector(state => state.products.searchBarInput)
  let [searchBarInput, setSearchBarInput] = useState(searchBar)
  let data;
  if (searchBarInput && searchBarInput !== '') {
    data = allProducts.filter(product => product.title.includes(searchBarInput))
  } else {
    data = allProducts
  }
    

  const handleSort = (e) => {
    e.preventDefault()
    if (e.target.innerText === 'All Products'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: ''})
    } else if (e.target.innerText === 'Price'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'price'})
    } else if (e.target.innerText === 'Rating'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'customer_rating'})
    } else if (e.target.innerText === 'Available Online'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'in_stock'})
    }
  }
  const handleSortAlt = (e) => {
    e.preventDefault()
    if (e.target.parentElement.parentElement.parentElement.querySelector("#search-target").firstElementChild.innerText === 'All Products'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: ''})
    } else if (e.target.parentElement.parentElement.parentElement.querySelector("#search-target").firstElementChild.innerText === 'Price'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'price'})
    } else if (e.target.parentElement.parentElement.parentElement.querySelector("#search-target").firstElementChild.innerText === 'Rating'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'rating'})
    } else if (e.target.parentElement.parentElement.parentElement.querySelector("#search-target").firstElementChild.innerText === 'Available Online'){
      dispatch({type: 'SORT_PRODUCTS', sortChar: 'in_stock'})
    }
  }
  const handleChange = (e) => {
    e.preventDefault()
    setSearchBarInput(e.target.value)
    // dispatch({type: 'SEARCH_PRODUCTS', searchBarInput: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'SEARCH_PRODUCTS', searchBarInput: e.target.firstElementChild.lastElementChild.value.toLowerCase()})
  }
  
  return (
    <React.Fragment>
      <ProductSearchBar setSearchInput={setSearchInput}/>
      <ProductList products={data} isLoading={isLoading}/>
    </React.Fragment>
  )
}