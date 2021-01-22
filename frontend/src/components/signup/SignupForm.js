//import React from 'react'
import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

import {CssBaseline, Avatar, Button, Container, makeStyles, TextField, Link, Typography, Grid, FormControlLabel} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { signupNewUser } from '../../redux/actions/userActions';

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

  const currentUser = useSelector(state => state.user.currentUser)
  const [user, setUser] = useState(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault()

    let emailVar = e.target.querySelector('#email').value
    let passwordVar = e.target.querySelector('#password').value
    let firstNameVar = e.target.querySelector('#firstName').value
    let lastNameVar = e.target.querySelector('#lastName').value

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": emailVar,
        "password": passwordVar,
        "firstname": firstNameVar,
        "lastname": lastNameVar
      })
    })
    .then(res => res.json())
    .then((data) => {
      
      let tempUser = {
        email: data.email,
        password: data.password,
        firstname: data.firstname,
        lastname: data.lastname
      }
      setUser(tempUser)
      dispatch(signupNewUser(data))
      localStorage.setItem('currentUser', tempUser)
      history.push('/storefront')
    })
  }

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        {user.email}
        {currentUser.email}

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
                          
                        />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" required fullWidth 
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="lname"
                        />
                  </Grid>
                  <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth 
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                  </Grid>
                  <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth 
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
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