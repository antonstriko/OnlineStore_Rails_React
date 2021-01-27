import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {Switch, Route, useHistory, useParams, useRouteMatch} from "react-router-dom";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {ChevronLeft as ChevronLeftIcon, ShoppingCart as ShoppingCartIcon, Menu as MenuIcon} from '@material-ui/icons';
import {AppBar, CssBaseline, Drawer, Container, Toolbar, List, Typography, Divider, IconButton, Badge, Modal, Backdrop, Fade, } from '@material-ui/core';

import AdminMenu from './AdminMenu'
import OrdersDataTable from './OrdersDataTable'
import OrdersList from '../order/OrdersList';

// import { fetchProducts } from '../../redux/actions/productActions';
import { logout } from '../../redux/actions/userActions';

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
      // drawerPaperClose: {
      //   overflowX: 'hidden',
      //   transition: theme.transitions.create('width', {
      //     easing: theme.transitions.easing.sharp,
      //     duration: theme.transitions.duration.leavingScreen,
      //   }),
      //   width: theme.spacing(7),
      //   [theme.breakpoints.up('sm')]: {
      //     width: theme.spacing(9),
      //   },
      // },
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
                const handleDrawerClose = () => setOpen(false);
              
      const currentUser = useSelector(state => state.user.currentUser)
      let { path, url } = useRouteMatch();

      const handleLogout = (event) => {
        localStorage.removeItem('token')
        dispatch(logout())
        props.history.push('/login')
      }

      return (
        <div className={clsx(classes.root)}  >
          <CssBaseline />

          <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
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

          <AdminMenu />

          <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Switch> 
                    <Route exact path={path}>
                        <OrdersDataTable />
                    </Route>
                    <Route exact path={`${path}/orders`}>
                        <OrdersList />
                    </Route>
                    {/* <Route exact path={`${path}/products`}>
                        <ProductsDataTable />
                    </Route> */}
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