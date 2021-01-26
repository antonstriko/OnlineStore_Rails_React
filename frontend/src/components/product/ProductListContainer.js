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

  const {allProducts, filteredProducts, isLoading, selectedProduct, sortTerm, filterTerm, searchInput} = useSelector(state => state.products)
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

    // // let [products, setProducts] = useState(prods)
  // const prodSortChar = useSelector(state => state.products.sortTerm)
  // const searchBar = useSelector(state => state.products.searchBarInput)

  // if (prodSortChar === 'price'){
  //   products.sort((a, b) => (a.price > b.price) ? 1 : -1)
  // } else if (prodSortChar === 'customer_rating'){
  //   products.sort((a, b) => (a.customer_rating > b.customer_rating) ? 1 : -1)
  // } else if (prodSortChar === 'in_stock'){
  //   products = products.filter(prod => prod.in_stock)
  // } else if (prodSortChar === ''){
  //   products.sort((a, b) => (a.id > b.id) ? 1 : -1)
  // }
  // if (searchBar !== ''){
  //   products = products.filter(prod => prod.title.toLowerCase().includes(searchBar))
  // }

  

  return (
    <React.Fragment>
      <ProductSearchBar />
      <ProductList products={allProducts}/>
    </React.Fragment>
  )
}