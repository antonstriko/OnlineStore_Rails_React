import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { setupCheckout, addAddress } from "../../redux/actions/checkoutActions";

export default function AddressForm({addressData, setAddressData}) {
  const dispatch = useDispatch()

  const currentUser = useSelector(state=> state.user.currentUser)

  const handleChange = (e) => {
    setAddressData({
        ...addressData,
        [e.target.name] : e.target.value
      });
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="firstname"
            label="First name"
            fullWidth
            defaultValue={currentUser.firstname}
            value={addressData.firstname}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="lastname"
            label="Last name"
            fullWidth
            defaultValue={currentUser.lastname}
            value={addressData.lastname}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="street"
            label="Address line 1"
            fullWidth
            value={addressData.street}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            label="Address line 2"
            fullWidth
            value={addressData.street2}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="city"
            label="City"
            fullWidth
            value={addressData.city}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            name="state" 
            label="State" 
            fullWidth
            value={addressData.state}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="zip"
            label="Zip / Postal code"
            fullWidth
            value={addressData.zip}
            onChange={(e)=>handleChange(e)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}