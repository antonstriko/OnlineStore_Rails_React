import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm({paymentData,setPaymentData, addressData}) {
  
  const handleChange = (e) => {
    setPaymentData({
        ...paymentData,
        [e.target.name] : e.target.value
      });
  }
  const defaultName = addressData.firstname + ' ' + addressData.lastname;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" name="cardName" label="Name on card" fullWidth autoComplete="cc-name" defaultValue={defaultName} value={paymentData.cardName} onChange={(e) => handleChange(e)}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            value={paymentData.cardNumber}
            autoComplete="cc-number"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" name="expDate" label="Expiry date" fullWidth value={paymentData.expDate} autoComplete="cc-exp" onChange={(e) => handleChange(e)}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value={paymentData.cvv}
            autoComplete="cc-csc"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}