import React, { useEffect, useReducer } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {Toolbar, AppBar, Paper, Box, Typography, IconButton, Badge, Grid, Card, Button, Table} from '@material-ui/core';


import { PlayCircleFilledWhite } from '@material-ui/icons';
// import { setupCheckout } from "../../_actions/checkoutActions";
import CartProduct from './CartProduct';


const useStyles = makeStyles((theme) => ({
  sCart: {
    height: '100%',
    minWidth: 800,
    width:'100%',
    display: 'flex',
    flexFlow: 'column',
    alignSelf: 'stretch',
    padding: 0
  },
  topBar: {
    height: 50,
    width:'100%',
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    alignContent: 'stretch',
    background: '#444444',
    color: 'white', 
  },
  topBarTitle: {
    flexGrow: 1,
    marginLeft: 20,
    width: '80%'
  },
  topBarClose: {
    width:'10%'
  },
  tableContainer: {
    width: '100%',
    padding:15,
    display: 'flex',
  },
  cartTable: {
    width:'100%'
  },
  totalDetailsContainer: {
    display: 'flex',
    width: '100%',
    padding:15,
    minHeight: 0,
    justifyItems: 'end',
    flexDirection:"column"
  },
  checkoutBtnContainer:{
    // height: 50,
    display: 'flex',
    width: '100%',
    padding:15,
    lineSpacing: 1.1,
    justifyContent: 'flex-end'
  },
  checkoutBtn:{
    
  },
  totalDetails: {
    width: '100%',
    textAlign: 'right',
    paddingRight: 20
  }
}));


function Cart(props) {

  const classes = useStyles();

  const items = useSelector(state => state.cart.cartItems)
  const subtotal  = useSelector(state => state.cart.subtotal)
  const itemCount = useSelector(state => state.cart.itemCount)

  const cartItems = items.map(item => <CartProduct cartItem={item} key={item.id} />);
  return (
    <React.Fragment>
      <Paper flexDirection="column" alignContent="stretch" className={"float-cart"}>
          <Box container display="flex" color="primary" className={classes.topBar} >
              <Box item className={classes.topBarTitle}>
                <Typography component="h1" variant="h6">Shopping Cart </Typography>
              </Box>
              <Box item className={classes.topBarClose}>
                <Button edge="end" color="inherit" onClick={(e) => props.handleCartClose(e)}> X </Button>
              </Box>
          </Box>

        <div className="float-cart__content">
          <div className="float-cart__shelf-container">
            {cartItems}
            {!cartItems.length && (
              <p className="shelf-empty">
                Add some products in the cart <br />
              </p>
            )}
          </div>

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`$ ${subtotal}`}
              </p>
            </div>
            <div onClick={() => props.handleRerouteToCheckout()} className="buy-btn">
              Checkout
            </div>
          </div>
        </div>
      </Paper>
    </React.Fragment>
  )
}
export default Cart



