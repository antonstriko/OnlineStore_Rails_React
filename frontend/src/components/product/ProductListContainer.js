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
  const token = JSON.parse(localStorage.getItem('token'));

  // const auth = `Bearer ${token}`
  // const options = {
  //   method: 'GET',
  //   url: 'http://localhost:3000/api/v1/products',
  //   headers: {'Content-type':'application/json','Authorization': auth}
  // };

  // useEffect(()=> {
  //     axios.request(options).then(function (response) {
  //       console.log(response.data);
  //       dispatch(fetchProducts(response.data))
  //     }).catch(function (error) {
  //       console.error(error);
  //     });
  // }, [])

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