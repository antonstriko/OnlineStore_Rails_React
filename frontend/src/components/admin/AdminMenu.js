import React from 'react'
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'

export default function AdminMenu(){
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const history = useHistory()
  // function handleClick() {
  //   setOpen(!open)
  // }

  return (
    <List component="nav" className={classes.adminMenu} disablePadding>
      <ListItem button onClick={()=> {history.push('/storefront')}} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconDashboard />
        </ListItemIcon>
        <ListItemText primary="StoreFront" />
      </ListItem>

      <ListItem button onClick={()=> {history.push('/admin')}}className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>

      <ListItem button onClick={()=> {history.push('admin/products')}}className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconPeople />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>

      <ListItem button className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconBarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles({
    adminMenu: {
      width: 240,
      paddingTop:60
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  })