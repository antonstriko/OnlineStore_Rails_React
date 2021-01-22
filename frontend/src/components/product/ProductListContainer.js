import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';

import {AppBar, CssBaseline, Drawer, Container, Toolbar, List, Typography, Divider, IconButton, Badge, Modal, Backdrop, Fade, } from '@material-ui/core';

import ProductList from './ProductList'
import ProductSearchBar from './ProductSearchBar'

// import { setupCheckout } from '../../redux/actions/checkoutActions';
import { fetchProducts } from '../../redux/actions/productActions';

export default function ProductListContainer(props){
  const dispatch = useDispatch();
  const headers = {
    headers: {'Content-Type':'application/json', 'Authorization': localStorage.token} 
    }

  useEffect(()=> {
    fetch('http://localhost:3000/api/v1/products', headers)
      .then(resp => resp.json())
      .then(data => dispatch(fetchProducts(data)))
  }, [])

  const {allProducts, filteredProducts, isLoading, currentProduct, sortTerm, filterTerm, searchInput} = useSelector(state => state.products)

  return (
    <React.Fragment>
     <ProductSearchBar />
     <ProductList products={allProducts}/>
    </React.Fragment>
  )
}