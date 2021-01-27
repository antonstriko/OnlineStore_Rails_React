import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import clearCheckout from '../../redux/actions/checkoutActions'

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

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
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
  const currentCheckout = useSelector(state => state.checkout)

  const handleNext = () => {
      setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
      setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    if (activeStep === steps.length){
      fetch('http://localhost:3000/orders', {
          method: 'POST',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            user_id: currentUser.id,
            name: `${currentCheckout.address.firstname} ${currentCheckout.address.lastname}`,
            total: cart.subtotal,
            item_count: cart.itemCount,
            paid: true,
            payment: `VISA ⠀•••• ${currentCheckout.payment.cardNumber.split("-")[3]}`,
            address_street: currentCheckout.address.street,
            address_city: currentCheckout.address.city,
            address_state: currentCheckout.address.state,
            address_zip: currentCheckout.address.zip
          })
      })
      .then(res => res.json())
      .then(order => {
            cart.cartItems.forEach(cartItem => {
                fetch('http://localhost:3000/order_items', {
                  method: 'POST',
                  headers: {"Content-type": "application/json"},
                  body: JSON.stringify({
                    title: cartItem.title,
                    order_id: order.id,
                    product_id: cartItem.product_id,
                    qty: cartItem.qty,
                    price: cartItem.price,
                    subtotal: cartItem.subtotal
                  })
                })
            })
            dispatch(clearCheckout)
      })
    }
  }, [activeStep])

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
                          <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                          </Typography>
                          <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order confirmation, and will
                            send you an update when your order has shipped.
                          </Typography>
                      </React.Fragment>
                  ) : (
                      <React.Fragment>
                          {getStepContent(activeStep)}
                          <div className={classes.buttons}>
                              {activeStep !== 0 && (<Button onClick={handleBack} className={classes.button}> Back </Button>)}
                              <Button onClick={handleNext} variant="contained" color="primary" className={classes.button}>
                                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                              </Button>
                          </div>
                      </React.Fragment>
                  )}
              </React.Fragment>
          </Paper>
      </div>
    </React.Fragment>
  );
}