import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {makeStyles, Grid} from '@material-ui/core';

import ProductCard from './ProductCard'


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
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Grid container className={classes.pList} spacing={2}>
        {
          props.products.map(item => <ProductCard product={item} key={item.id} />)
        }
      </Grid>
    </React.Fragment>
  );
}
export default ProductList