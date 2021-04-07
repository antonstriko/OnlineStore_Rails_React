import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import API from '../../utils/api'
// import {Switch, Route, useHistory, Link, useParams, useRouteMatch} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

import {resetCheckout} from '../../redux/actions/checkoutActions'
import {addNewOrder} from '../../redux/actions/orderActions'
import {resetCart} from '../../redux/actions/cartActions'
// import {handleOrderSubmit} from '../../redux/actions/asyncOrderActions'

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

export default function Checkout() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);

  const cart = useSelector(state => state.cart)
  const currentUser = useSelector(state => state.user.currentUser)

  const [paymentData, setPaymentData] = useState({
        name: '',
        cardNumber: '',
        cvv: '',
        expDate: ''
  })
  const [addressData, setAddressData] = useState({
    fistname: '',
    lastname: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zip: ''
  })

  const handleNext = () => {
      setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
      setActiveStep(activeStep - 1);
  };

  const handleCheckoutCleanUp = () => {
    dispatch(resetCart);
    console.log('Dispatched resetCart')
    dispatch(resetCheckout);
    console.log('Dispatched resetCheckout')
  }

  const handleOrderSubmit = () => {
    const order = {
      user_id: currentUser.id,
      total: cart.subtotal,
      item_count: cart.itemCount,
      paid: true,
      payment: `VISA ⠀•••• ${paymentData.cardNumber.split("-")[3]}`,
      address_street: addressData.street,
      address_city: addressData.city,
      address_state: addressData.state,
      address_zip: addressData.zip,
      order_item_attributes: cart.cartItems
    }

    API.post('orders', order)
    .then(response => {
        console.log(response)
        dispatch(addNewOrder(response.data));
        console.log('Dispatched addNewOrder with response.data')
    }).then(handleCheckoutCleanUp())
    .catch(error => console.log(error));
  }

  // useEffect(() => {
  // }, [])
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

                              {/* {activeStep !== 0 && (<Button onClick={handleBack} className={classes.button}> Back </Button>)}
                                  <Button onClick={handleNext} variant="contained" color="primary" className={classes.button}>
                                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                  </Button> */}
                          </div>
                      </React.Fragment>
                  )}
              </React.Fragment>
          </Paper>
      </div>
    </React.Fragment>
  );
}