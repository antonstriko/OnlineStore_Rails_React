import React from 'react';
import { useDispatch } from 'react-redux';
import {incrementCartItem, decrementCartItem, removeCartItem} from '../../redux/actions/cartActions';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

function CartProduct(props) {

  const { cartItem } = props;
  const dispatch = useDispatch()

  const handleOnIncrease = () => {
    dispatch(incrementCartItem(cartItem))
  }

  const handleOnDecrease = () => {
    dispatch(decrementCartItem(cartItem))
  }

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(cartItem))
  } 
    return (
      <div className={'shelf-item'}>
        <div className="shelf-item__del" onClick={handleRemoveCartItem}/>
        <div className="shelf-item__details">
          <p className="title1">{cartItem.title}</p>
          <p className="title2">Price: $ {cartItem.price}</p>
          <p className="title2">Quantity: {cartItem.qty}</p>
          
        </div>
        <div className="shelf-item__price">
          <div>
              <p>{`$ ${cartItem.subtotal}`}</p>
              <div>
                <button onClick={handleOnDecrease} disabled={cartItem.qty === 1 ? true : false} className="change-product-button">-</button>
                <button onClick={handleOnIncrease} className="change-product-button">+</button>
              </div>
          </div>
        </div>
        <div className={'deleteBtnContainer'}>
          <button onClick={() => dispatch(removeCartItem(cartItem))}> <DeleteTwoToneIcon /> </button> 
        </div>
      </div>
    );
  
}

export default CartProduct;