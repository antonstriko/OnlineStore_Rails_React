import React from 'react';
import { useSelector} from 'react-redux';

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


function FavoritesList(props) {
  const classes = useStyles();
  
  const currentUser = useSelector(state => state.user.currentUser)
  const favIds = currentUser.favorites || []
  const allProducts = useSelector(state => state.product.allProducts)
  
  const favs = allProducts.filter((item => favIds.includes(item.id)))
  const favProducts = favs.map(item => <ProductCard product={item} key={item.id} />)

  return (
    <React.Fragment>
      { favProducts && <Grid container className={classes.pList} spacing={2}> {favProducts} </Grid> }
      { !favProducts && <Grid container className={classes.pList} spacing={2}> <p>You have not added any favorites yet</p></Grid> }
    </React.Fragment>
  );
}
export default FavoritesList