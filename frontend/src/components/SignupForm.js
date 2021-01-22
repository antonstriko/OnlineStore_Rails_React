//import React from 'react'
import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {CssBaseline, Avatar, Button, Container, makeStyles, TextField, Link, Typography, Grid, FormControlLabel} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


    const useStyles = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

function SignupForm() {
    const classes = useStyles()
    let history = useHistory()
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstname, lastname })
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:3000/login', requestOptions)
      .then(resp => resp.json())
      .then(data => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('user', JSON.stringify(data.user));
          dispatch({type:'LOGIN', user: data.user})
          history.push('/storefront')
      });
    }
  
  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" required fullWidth autoComplete="fname" autoFocus
                          name="firstName"
                          id="firstName"
                          label="First Name"
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" required fullWidth 
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="lname"
                          onChange={(e) => setLastname(e.target.value)}
                        />
                  </Grid>
                  <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth 
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                  </Grid>
                  <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth 
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                  </Grid>
                </Grid>

                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                  Sign Up
                </Button>

                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="http://localhost:3001/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
            </form>
        </div>
    </Container>
  );
}
export default SignupForm