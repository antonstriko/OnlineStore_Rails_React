import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from "react-router-dom";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, makeStyles, Box} from '@material-ui/core';
import {Rating} from '@material-ui/lab';

import { addToCart, incrementCartItem } from '../../redux/actions/cartActions';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  card: {
    minWidth: 200,
    width: 250,
    height:450,
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  cardMedia: {
    width:150, minHeight:175, margin: 'auto', flex: 1
  },
  cardContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center'
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  price: {
    color: '#B12704',
    fontSize: 17,
    fontWeight: 'bold',
  },
  notInStock: {textAlign: 'center'},
  brandLink: {
    color: '#212121',
    textDecoration: 'none'
  }
}));

function ProductCard({product}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const cartItems = useSelector(state => state.cart.cartItems)
    const productInCart = cartItems.find( item => item.product_id === product.id)
  
    const handleAddToCart = () => {
      if (productInCart) {
        return dispatch(incrementCartItem(product))
      } else {
        return dispatch(addToCart(product))
      }
    }

    return (
      <React.Fragment>
        <Grid item key={product.id}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={product.image_url} title={product.title} />
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.price}>
                      $ {product.price}
                    </Typography>
                    <Typography className={classes.title}>
                      {product.brand}
                    </Typography>
                    <Typography>
                      {product.title}
                    </Typography>
                    <Box className={classes.cardActions}>
                      <Rating name="half-rating-read" value={product.rating} precision={0.5} readOnly />
                      {product.num_reviews}
                    </Box>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Box>{ product.in_stock ? 'In-Stock' : 'Unavailable Online'}</Box>
                    <Button onClick={handleAddToCart} className={classes.addToCartBtn} size='medium' variant="contained" color="primary">
                      Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
      </React.Fragment>
    )
}
export default ProductCard;