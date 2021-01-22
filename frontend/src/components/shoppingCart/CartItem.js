import React from 'react';
import { useState, useSelector, useDispatch } from 'react-redux';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import IndeterminateCheckBoxTwoToneIcon from '@material-ui/icons/IndeterminateCheckBoxTwoTone';
import {IconButton, Badge, Typography, Grid, Button, Box} from '@material-ui/core';


function CartItem(props){
  // const products = useSelector(state => state.products.allProducts)
  // const {items, setItems} = useState()
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cart)

  const handleRemoveFromCart = (e) => {
    //this.props.removeFromCart(this.props.product, this.props.indexInCart);
    
    console.log('Remove from cart event fired')
    dispatch({type: 'REMOVE_FROM_CART', product: props.product})
  }
  

  const handleQuantityChange = (e) => {
    console.log('handleQuantityChange in cart event fired')

    const cartItem = props.product
    // let newCartTotal;
    let updatedQty = cartItem.qty + 1;
    let updatedSubTotal = updatedQty * cartItem.price;
    const updatedCartItem = {
        ...cartItem,
        qty: updatedQty,
        subTotal : parseFloat(updatedSubTotal)
    }
    let cartTotal = cartState.subTotal + cartItem.price
    dispatch({
        type: 'UPDATE_CART_ITEM', 
        subTotal: cartTotal,
        product: updatedCartItem
    })
  }

  return (
    <React.Fragment>
      <tr className="items-in-cart">
        {props.product.image_urls[0] ? <td><img width={75} height={75} src={props.product.image_url} alt={"producIimage"}></img></td> : <td></td>}
        <td>{props.product.title}</td>
        <td>${props.product.price}</td>
        <td>
          <input value={props.product.qty || 1} type="number" name="quantity" min="1" max="10" onChange={handleQuantityChange} />
        </td>
        {/* <td>${props.product.price * props.product.quantity}</td> */}
        <td>${props.product.subTotal}</td>
        <td><DeleteTwoToneIcon /></td>
      </tr>
    </React.Fragment>
  )
}
export default CartItem

// function ShoppingCartItem(props){
//   return (
//     <React.Fragment>
//       <Grid item key={props.product.id}>
//         <Card className={classes.card}>
//           <img className={classes.scProductImage} src={props.product.image_url} title={props.product.name} />
//             <Typography className={classes.price}>
//               $ {props.product.price}
//             </Typography>
//             <Typography>
//               {props.product.brand}
//             </Typography>
//             <Typography>
//               {props.product.title}
//             </Typography>
//             <Box className={classes.cardActions}>
//               <Rating name="half-rating-read" value={props.product.customer_rating} precision={0.5} readOnly />
//               {props.product.num_reviews}
//             </Box>
          
//             <Box>{ props.product.in_stock ? 'In-Stock' : 'Unavailable Online'}</Box>
//             <Button onClick={(e) => this.addToCart()} className={classes.addToCartBtn} size='medium' variant="contained" color="primary">
//               Add to Cart
//             </Button>
          
//         </Card>
//       </Grid>
//     </React.Fragment>
// }
// export default ShoppingCartItem