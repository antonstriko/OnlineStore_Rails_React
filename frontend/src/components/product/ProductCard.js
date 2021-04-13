import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from "react-router-dom";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, makeStyles, Box} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

import { addToCart, incrementCartItem } from '../../redux/actions/cartActions';
import { removeFavorite, addFavorite } from '../../redux/actions/userActions';

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
  cardPriceFav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    const [isUserFavorite, setIsUserFavorite] = React.useState(false)
    const user = useSelector(state => state.user)
    

    const cartItems = useSelector(state => state.cart.cartItems)
    const productInCart = cartItems.find(item => item.product_id === product.id)

    const handleAddToCart = () => {
      if (productInCart) { 
        return dispatch(incrementCartItem(productInCart))
      } else {
        return dispatch(addToCart(product))
      }
    }

    const addFav = () => {
      fetch('http://localhost:3000/api/v1/favorites',{
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({user_id: user.currentUser.id, product_id: product.id})
        })
        .then(res => res.json())

    }

    const removeFav = () => {
      fetch(`http://localhost:3000/api/v1/favorites`,{
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user_id: user.currentUser.id, product_id: product.id})
      })
        .then(res => res.json())
    }

    const handleToggleFavorite = () => {
      if (isUserFavorite) {
        setIsUserFavorite(false)
        dispatch(removeFavorite(product.id))
        removeFav(product.id)
      } else {
        setIsUserFavorite(true)
        dispatch(addFavorite(product.id))
        addFav(product.id)
      }  
    }

    const showProductPage = () => {

    }

    React.useEffect(()=> {
      if (user.favIds.includes(product.id)) {
        setIsUserFavorite(true)
      }
    },[user.favIds, product.id])

    return (
      <React.Fragment>
        <Grid item key={product.id}>
            <Card className={classes.card}>
                <CardMedia onClick={() => showProductPage(product)} className={classes.cardMedia} image={product.image_url} title={product.title} />
                <CardContent className={classes.cardContent}>
                    <Box className={classes.cardPriceFav}>
                      <Typography className={classes.price}> $ {product.price} </Typography>
                      <Button aria-label="favorite button" type="button">
                        <FontAwesomeIcon size="lg" onClick={handleToggleFavorite} className={classes.favIcon} icon={isUserFavorite ? faStarSolid : faStar} aria-label={isUserFavorite ? "favorited icon" : "add-favorite icon"} />
                      </Button>
                    </Box>
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
                    {/* <Box>{ product.in_stock ? 'In-Stock' : 'Unavailable Online'}</Box> */}
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