import React, { useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'

import {Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container, makeStyles} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

// import { login } from '../_actions/userActions'
import { useHistory } from "react-router-dom"
import PropTypes from 'prop-types'
// import { getLocalCurrentUser, setLocalCurrentUser } from '../localServices';

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

function LoginForm({setToken}) {
    const classes = useStyles();
    let history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
      e.preventDefault()
      // loginUser({ email, password })
      /**  Need function to set currentUser in Redux Store **/
      fetch('http://localhost:3000/api/v1/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user: {
            email,
            password
          }
        })
      }).then(res => res.json())
      .then(token => {
        console.log(token)
        if(token.hasOwnProperty('auth_key')){

          localStorage.setItem('token',token.auth_key)
          this.props.history.push('/')
        }else{
          alert('Login Failed..')
        }
      })
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
            <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
            <Typography component="h1" variant="h5"> Sign in </Typography>
            <form className={classes.form} onSubmit={(e)=>handleSubmit(e)} noValidate>
                <TextField variant="outlined" margin="normal" required fullWidth autoComplete="email" autoFocus
                  label="Email Address"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField variant="outlined" margin="normal" required fullWidth autoComplete="current-password"
                  name="password"
                  label="Password"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
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
                    <Link href="http://localhost:3001/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
            </form>
      </div>
    </Container>
  );

}
export default LoginForm

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired
}