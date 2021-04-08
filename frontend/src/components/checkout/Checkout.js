import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from '../../utils/api'
// import {Switch, Route, useHistory, Link, useParams, useRouteMatch} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import {Paper, Stepper, Step, StepLabel, Button, Typography} from '@material-ui/core';


import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

import {addNewOrder} from '../../redux/actions/orderActions'
import {clearCart} from '../../redux/actions/cartActions'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Shipping Details', 'Payment Details', 'Review Your Order'];

function getStepContent(step, paymentData, setPaymentData, addressData, setAddressData){
  switch (step) {
    case 0:
      return <AddressForm addressData={addressData} setAddressData={setAddressData}/>;
    case 1:
      return <PaymentForm paymentData={paymentData} setPaymentData={setPaymentData} addressData={addressData}/>;
    case 2:
      return <Review addressData={addressData} paymentData={paymentData}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout({handleRerouteToStorefront}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const currentUser = useSelector(state => state.user.currentUser)
  const [activeStep, setActiveStep] = React.useState(0);
  const [paymentData, setPaymentData] = useState({name: '', cardNumber: '', cvv: '', expDate: ''})
  const [addressData, setAddressData] = useState({fistname: '', lastname: '', street: '', street2: '', city: '', state: '', zip: ''})

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  const handleOrderSubmit = (e) => {
    e.preventDefault()
    const order = {
      user_id: currentUser.id,
      total: cart.subtotal,
      item_count: cart.itemCount,
      paid: true,
      payment: `VISA ⠀•••• ${paymentData.cardNumber.slice(-12)}`,
      address_street: addressData.street,
      address_city: addressData.city,
      address_state: addressData.state,
      address_zip: addressData.zip,
      order_items_attributes: cart.cartItems
    }

    API.post('orders', order)
      .then(response => {
          dispatch(addNewOrder(response.data));
      })
      .then(() => dispatch(clearCart()))
      .then(() => handleRerouteToStorefront())
      .catch(error => console.log(error));
  }

  // useEffect(() => {
  //   if (activeStep === steps.length){
  //     handleOrderSubmit(currentUser, cart, paymentData, addressData)
  //   }
  // }, [activeStep, currentUser, cart, paymentData, addressData])

  return (
    <React.Fragment>
      <div className={classes.layout}>
          <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                    Checkout
              </Typography>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                  {steps.map((label) => (
                      <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                      </Step>
                  ))}
              </Stepper>
              <React.Fragment>
                  {activeStep === steps.length ? (
                      <React.Fragment>
                          <Typography variant="h5" gutterBottom> Thank you for your order. </Typography>
                          <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order confirmation, and will
                            send you an update when your order has shipped.
                          </Typography>
                      </React.Fragment>
                  ) : (
                      <React.Fragment>
                          {getStepContent(activeStep, paymentData, setPaymentData, addressData, setAddressData)}
                          <div className={classes.buttons}>
                              {activeStep !== 0 && (<Button onClick={handleBack} className={classes.button}> Back </Button>)}
                              {activeStep < steps.length - 1  && (<Button onClick={handleNext} variant="contained" color="primary" className={classes.button}>Next</Button>)}
                              {activeStep === steps.length - 1  && (<Button onClick={handleOrderSubmit} variant="contained" color="primary" className={classes.button}>Place order</Button>)}
                          </div>
                      </React.Fragment>
                  )}
              </React.Fragment>
          </Paper>
      </div>
    </React.Fragment>
  );
}