import React, { useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';

import {AppBar, Toolbar, Button, ButtonGroup, Typography, InputBase} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { setProductFilter, setProductSort} from '../../redux/actions/productActions';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  procuctSearchBar: {
   background: '#ffac33'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function ProductSearchBar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {allProducts, filteredProducts, isLoading, selectedProduct, sortTerm, filterTerm, searchInput} = useSelector(state => state.products)

  const handleSortChange = (sortTerm) => {
    dispatch(setProductSort(sortTerm))
  }
  const handleFilterChange = (filterTerm) => {
    dispatch(setProductFilter(filterTerm))
  }

  const handleInputChange = (e) => {
      props.setSearchInput(e.target.value )
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.procuctSearchBar} position="static">
          <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                  Products
              </Typography>
              Sort By:
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                  <Button onClick={()=>handleSortChange('price')}>Price</Button>
                  <Button onClick={()=>handleSortChange('title')}>Title</Button>
              </ButtonGroup>
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    onChange={handleInputChange}
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
              </div>
          </Toolbar>
      </AppBar>
    </div>
  );
}
