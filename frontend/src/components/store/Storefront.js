import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {Switch, Route, useHistory, useRouteMatch} from "react-router-dom";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {ChevronLeft as ChevronLeftIcon, ShoppingCart as ShoppingCartIcon, Menu as MenuIcon} from '@material-ui/icons';
import {AppBar, CssBaseline, Drawer, Container, Toolbar, List, Typography, Divider, IconButton, Badge, Modal, Backdrop, Fade} from '@material-ui/core';

import { MainListItems } from './StoreNavList';
import ProductListContainer from '../product/ProductListContainer'
import FavoritesList from '../product/FavoritesList'
import Cart from '../shoppingCart/Cart'
import Checkout from '../checkout/Checkout';
import OrderDataGrid from '../order/OrderDataGrid';

import { fetchProducts } from '../../redux/actions/asyncProductActions';
import { fetchOrders } from '../../redux/actions/asyncOrderActions';
import { logout } from '../../redux/actions/userActions';


    const drawerWidth = 240;
    const useStyles = makeStyles((theme) => {
      return ({
        root: {
          display: 'flex'
        },
        toolbar: {
          paddingRight: 24,
        },
        toolbarIcon: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 8px',
          ...theme.mixins.toolbar,
        },
        appBar: {
          background: '#989a9c',
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        appBarShift: {
          background: 'green',
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        menuButton: {
          marginRight: 36,
        },
        menuButtonHidden: {
          display: 'none',
        },
        title: {
          flexGrow: 1,
        },
        drawerPaper: {
          position: 'relative',
          whiteSpace: 'nowrap',
          width: drawerWidth,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        drawerPaperClose: {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        },

        container: {
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(4),
        },
        modal: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
        },
        navList: {
          color: 'black',
          textDecoration: 'none'
        },
        logoutButton: {
          fontSize: 18
        }
      });
    });

export default function Storefront(props) {
  // Sidebar Menu
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  // ShoppingCart
  const [cartOpen, setCartOpen] = React.useState(false);
  const handleCartOpen = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);

    let history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    // const [orders, setOrders] = useState([])

    const cartItemCount = useSelector(state => state.cart.itemCount)
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    let {path} = useRouteMatch();

    useEffect(()=> {
        dispatch(fetchProducts())
        dispatch(fetchOrders())
    },[dispatch])
    
    const handleRerouteToCheckout = () => {
        handleCartClose()
        history.push('storefront/checkout')
    }

    const handleLogout = (event) => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      dispatch(logout())
      history.push('/login')
    }

    // const adLink = '/admin'
    return (
      <div className={clsx(classes.root)}  >
        <CssBaseline />

        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
              <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)} >
                <MenuIcon />
              </IconButton>

              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}> Backwoods Gear Store </Typography>
              {/* {isLoggedIn ? 
                <IconButton edge="start" color="inherit" aria-label="open drawer" className={classes.logoutButton} onClick={(e) => logout(e)} >Log Out</IconButton> : 
                <IconButton edge="start" color="inherit" aria-label="open drawer" className={classes.logoutButton} onClick={(e) => login(e)} >Log In</IconButton>} */}
              <IconButton edge="start" color="inherit" className={classes.logoutButton} onClick={handleLogout} >
                Log Out
              </IconButton>
              <IconButton color="inherit" onClick={handleCartOpen}>
                  <Badge badgeContent={cartItemCount} color="secondary">
                      <ShoppingCartIcon />
                  </Badge>
              </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}} open={open} >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
              <MainListItems />
            </List>
        </Drawer>

        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Modal open={cartOpen} handleCartClose={handleCartClose} closeAfterTransition aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" className={classes.modal} BackdropComponent={Backdrop} BackdropProps={{timeout: 500,}}>
                  <Fade in={cartOpen}>
                      <div className={classes.paper}>
                        <Cart handleRerouteToCheckout={handleRerouteToCheckout} handleCartClose={handleCartClose}/>
                      </div>
                  </Fade>
              </Modal>
              <Switch> 
                  <Route exact path={path}>
                      <ProductListContainer />
                  </Route>
                  <Route exact path={`${path}/orders`}>
                      <OrderDataGrid />
                  </Route>
                  <Route exact path={`${path}/favorites`}>
                      <FavoritesList />
                  </Route>
                  <Route exact path={`${path}/checkout`}>
                      <Checkout />
                  </Route>
              </Switch>
            </Container>
        </main>
      </div>
    )
}