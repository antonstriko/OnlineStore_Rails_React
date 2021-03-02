import React from 'react';
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({paymentData, addressData}) {
  const classes = useStyles();
  const cart = useSelector(state => state.cart)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.cartItems.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.title} />
            <Typography variant="body2">{product.subtotal}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}> ${cart.subtotal} </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}> Shipping </Typography>
          <Typography gutterBottom>{addressData.firstname + ' ' + addressData.lastname}</Typography>
          <Typography gutterBottom>{addressData.street + ', ' + addressData.city + ', ' + addressData.state + ', ' + addressData.zip }</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment >
              <Grid item xs={6}>
                <Typography gutterBottom>Card Name:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{addressData.firstname + ' ' + addressData.lastname}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment >
              <Grid item xs={6}>
                <Typography gutterBottom>Card Number:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{paymentData.cardNumber}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment >
              <Grid item xs={6}>
                <Typography gutterBottom>Card Expiration Date:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{paymentData.expDate}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment >
              <Grid item xs={6}>
                <Typography gutterBottom>Card CVV</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{paymentData.cvv}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}