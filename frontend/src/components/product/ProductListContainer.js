import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';

import {AppBar, CssBaseline, Drawer, Container, Toolbar, List, Typography, Divider, IconButton, Badge, Modal, Backdrop, Fade, } from '@material-ui/core';

import ProductList from './ProductList'
import ProductSearchBar from './ProductSearchBar'

export default function ProductListContainer(props){
  const [searchInput, setSearchInput] = useState('')
  const {filteredProducts, isLoading, selectedProduct, sortTerm, filterTerm} = useSelector(state => state.products)


  const dispatch = useDispatch();

  let searchBar = useSelector(state => state.products.searchBarInput)
  let [searchBarInput, setSearchBarInput] = useState(searchBar)
  // if (searchBarInput && searchBarInput !== '') {
  //   data = allProducts.filter(product => product.title.includes(searchBarInput))
  // } else {
  //   data = allProducts
  // }
  const data = filteredProducts.slice()

  const comparePrice = (a, b) => {
    const x = parseFloat(a.price);
    const y = parseFloat(b.price);
  
    let comparisonPrice = 0;
    if (x > y) {
      comparisonPrice = 1;
    } else if (x < y) {
      comparisonPrice = -1;
    }
    return comparisonPrice;
  }

  const compareTitle = (a, b) => {
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

  if (sortTerm === 'price'){
    data.sort(comparePrice);
  } else if (sortTerm === 'title'){
    data.sort(compareTitle);
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