import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import IndeterminateCheckBoxTwoToneIcon from '@material-ui/icons/IndeterminateCheckBoxTwoTone';
import {IconButton, Badge, Typography, Grid, Button, Box} from '@material-ui/core';

import {addToCart, incrementCartItem, decrementCartItem, removeCartItem} from '../../redux/actions/cartActions';

function CartRow({cartItem}){
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)

  const handleRemoveCartItem = () => {
    return dispatch(removeCartItem(cartItem))
  }
  const handleQuantityChange = (e) => {
    console.log('handleQuantityChange in cart event fired')

    // let qty = cartItem.qty + 1;
    // let subtotal = qty * cartItem.price;
    // const updatedCartItem = {
    //     ...cartItem,
    //     qty: updatedQty,
    //     subtotal : parseFloat(updatedSubtotal)
    // }
    // let cartTotal = cartState.subtotal + cartItem.price
    // dispatch({
    //     type: 'UPDATE_CART_ITEM', 
    //     subtotal: cartTotal,
    //     product: updatedCartItem
    // })
  }
  const handleIncrementCartItem = () => {
      cartItem.qty++
      cartItem.subtotal += Number(cartItem.price)
      return dispatch(incrementCartItem(cartItem))
  }
  const handleDecrementCartItem = () => {
      cartItem.qty--
      cartItem.subtotal -= Number(cartItem.price)
      return dispatch(decrementCartItem(cartItem))
  }
  return (
    <React.Fragment>
      <tr className="items-in-cart">
        {cartItem.image_url ? <td><img width={75} height={75} src={cartItem.image_url} alt={"producImage"}></img></td> : <td></td>}
        <td>{cartItem.title}</td>
        <td>${cartItem.price}</td>
        <td>
          <input value={cartItem.qty} type="number" min="1" max="20" onChange={handleQuantityChange} />
        </td>
        {/* <td>${cartItem.price * cartItem.qty}</td> */}
        <td>${cartItem.subtotal}</td>
        <td><button onClick={handleRemoveCartItem}><DeleteTwoToneIcon /></button></td>
      </tr>
    </React.Fragment>
  )
}
export default CartRow