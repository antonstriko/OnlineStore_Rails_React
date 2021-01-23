import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from "react-router-dom";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, makeStyles, Box} from '@material-ui/core';
import {Rating} from '@material-ui/lab';

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

function ProductCard(props) {
  const classes = useStyles();
  // const dispatch = useDispatch();
  
  return (
    <React.Fragment>
      <Grid item key={props.product.id}>
          <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image={props.product.image_url} title={props.product.title} />
              <CardContent className={classes.cardContent}>
                  <Typography className={classes.price}>
                    $ {props.product.price}
                  </Typography>
                  <Typography className={classes.title}>
                    {props.product.brand}
                  </Typography>
                  <Typography>
                    {props.product.title}
                  </Typography>
                  <Box className={classes.cardActions}>
                    <Rating name="half-rating-read" value={props.product.rating} precision={0.5} readOnly />
                    {props.product.num_reviews}
                  </Box>
              </CardContent>
              <CardActions className={classes.cardActions}>
                  <Box>{ props.product.in_stock ? 'In-Stock' : 'Unavailable Online'}</Box>
                  <Button onClick={() => addToCart(props.product)} className={classes.addToCartBtn} size='medium' variant="contained" color="primary">
                    Add to Cart
                  </Button>
              </CardActions>
          </Card>
      </Grid>
    </React.Fragment>
  )
}
export default ProductCard;