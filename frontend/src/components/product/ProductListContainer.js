import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';

import {AppBar, CssBaseline, Drawer, Container, Toolbar, List, Typography, Divider, IconButton, Badge, Modal, Backdrop, Fade, } from '@material-ui/core';

import ProductList from './ProductList'
import ProductSearchBar from './ProductSearchBar'

// import { setupCheckout } from '../../redux/actions/checkoutActions';
import { fetchProducts } from '../../redux/actions/productActions';
import axios from "axios";

export default function ProductListContainer(props){
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

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

  const {allProducts, filteredProducts, isLoading, currentProduct, sortTerm, filterTerm, searchInput} = useSelector(state => state.products)

  return (
    <React.Fragment>
     <ProductSearchBar />
     <ProductList products={allProducts}/>
    </React.Fragment>
  )
}