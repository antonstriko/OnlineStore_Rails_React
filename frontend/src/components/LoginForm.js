import React, { useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {useHistory} from "react-router"

import {Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container, makeStyles} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { loginSuccess } from '../redux/actions/userActions'

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  noUser: {
    color: 'red'
  }
}));

function LoginForm(props) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user: { email, password }})
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:3000/api/v1/login', requestOptions)
      .then(resp => resp.json())
      .then(data => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log(data)
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', data.user.id);
          dispatch(loginSuccess(data.user))
          history.push('/storefront')
      });
    }
    const handSignupLink = (e) => {
      e.preventDefault()
      history.push('/signup')
    }

    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  
    useEffect( () => {
      if (isLoggedIn) {
        history.push('/storefront')
      }
    }, [isLoggedIn, history])

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
            <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
            <Typography component="h1" variant="h5"> Sign in </Typography>
            <form className={classes.form} onSubmit={(e)=>handleSubmit(e)} noValidate>
                <TextField variant="outlined" margin="normal" required fullWidth autoComplete="email" autoFocus
                  label="Email Address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField variant="outlined" margin="normal" required fullWidth autoComplete="current-password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" onClick={handSignupLink} variant="body2">
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
            </form>
      </div>
    </Container>
  );

}
export default LoginForm