import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Switch, Route, useHistory, useRouteMatch} from "react-router-dom";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Menu as MenuIcon} from '@material-ui/icons';
import {AppBar, CssBaseline, Container, Toolbar, Typography, IconButton} from '@material-ui/core';

import AdminMenu from './AdminMenu'
import AdminOrderList from './AdminOrderList'
import AdminProductList from './AdminProductList';
import {addFetchedUsers, logout} from '../../redux/actions/userActions';
import {isLoadingProducts, addFetchedProducts} from '../../redux/actions/productActions';
import {isLoadingOrders, addFetchedOrders} from '../../redux/actions/orderActions';
import API from '../../utils/api';


    const drawerWidth = 240;
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex'
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        background: 'grey',
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
        paddingTop: 60,
        display: 'flex',
        flexDirection: 'row',
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
        // padding: theme.spacing(2, 4, 3),
      },
      navList: {
        color: 'black',
        textDecoration: 'none'
      },
      logoutButton: {
        fontSize: 18
      }
    }));

export default function AdminDashboard(props) {
      let history = useHistory();
      const dispatch = useDispatch();
      const classes = useStyles();
                const [open, setOpen] = React.useState(true);
                const handleDrawerOpen = () => setOpen(true);
                // const handleDrawerClose = () => setOpen(false);
              
      let {path} = useRouteMatch();

      const handleLogout = (event) => {
        localStorage.removeItem('token')
        dispatch(logout())
        props.history.push('/login')
      }

      useEffect(()=> {
        const getProducts = async () => {
          dispatch(isLoadingProducts())
          const { data } = await API.get("products");
          dispatch(addFetchedProducts(data));
        };
        getProducts()
    
        const getOrders = async () => {
          dispatch(isLoadingOrders())
          const { data } = await API.get("orders");
          dispatch(addFetchedOrders(data));
        };
        getOrders()

        const getUsers = async () => {
          const { data } = await API.get("users");
          dispatch(addFetchedUsers(data));
        };
        getUsers()
      },[dispatch])

      return (
        <div className={clsx(classes.root)}  >
          <CssBaseline />

          <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)} >
                  <MenuIcon />
                </IconButton>

                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}> Backcountry Store - Store Manager Dashboard</Typography>
                <IconButton edge="start" color="inherit" aria-label="open drawer" className={classes.logoutButton} onClick={handleLogout} >
                  Log Out
                </IconButton>
            </Toolbar>
          </AppBar>

          <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <AdminMenu />
              <Container maxWidth="lg" className={classes.container}>
                <Switch> 
                    <Route exact path={path}>
                        <AdminOrderList />
                    </Route>
                    <Route exact path={`${path}/products`}>
                        <AdminProductList />
                    </Route>
                </Switch>
              </Container>
          </main>
        </div>
      );
}


      // <Drawer
      //   variant="permanent"
      //   classes={{
      //     paper: classes.drawerPaper,
      //   }}
      // >
      //   <AppMenu />
      // </Drawer>
      // <main className={classes.content}>
      //   <Container maxWidth="lg" className={classes.container}>
      //     <Typography>I'm the content</Typography>
      //   </Container>
      // </main>