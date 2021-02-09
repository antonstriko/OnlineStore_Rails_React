import React from 'react';
import {useSelector} from 'react-redux';

import {makeStyles, Grid} from '@material-ui/core';

import ProductCard from './ProductCard'
// import Loading from '../Loading'


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


function FavoritesList() {
  const classes = useStyles();
  const userFavorites = useSelector(state => state.user.currentUser.favorites)
  const favorites = userFavorites.map(item => <ProductCard product={item} key={item.id} />)

  return (
    <React.Fragment>
        <h1>Favorites</h1>
        {/* {!list && <p>You have not added any favorites yet</p>} */}
        <Grid container className={classes.pList} spacing={2}>{favorites}</Grid>
        {/* {!pList && <Grid container className={classes.pList} spacing={2}>{list}</Grid>} */}
      
    </React.Fragment>
  );
}
export default FavoritesList