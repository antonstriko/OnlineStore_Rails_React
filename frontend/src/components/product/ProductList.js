import React from 'react';


import {makeStyles, Grid} from '@material-ui/core';

import ProductCard from './ProductCard'
import Loading from '../Loading'


const useStyles = makeStyles((theme) => ({
  pList: {
    height: '100%',
    width:'100%',
    display: 'flex',
    flexFlow: 'row wrap',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }
}));


function ProductList(props) {
  const classes = useStyles();
  const products = props.products.map(item => <ProductCard product={item} key={item.id} />)
  const isLoading = props.isLoading

  return (
    <React.Fragment>
      { isLoading && <Loading /> }
      { !isLoading && <Grid container className={classes.pList} spacing={2}> {products} </Grid> }
    </React.Fragment>
  );
}
export default ProductList