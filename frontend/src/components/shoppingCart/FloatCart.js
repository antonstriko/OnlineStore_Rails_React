import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { setupCheckout } from "../../redux/actions/checkoutActions";

import CartProduct from './CartProduct';

function FloatCart() {
  const [isOpen, setIsOpen] = useState(false)
  let history = useHistory();

  const openFloatCart = () => setIsOpen(true)
  const closeFloatCart = () => setIsOpen(false)

  const handleRerouteToCheckout = () => {
    closeFloatCart()
    setupCheckout()
    history.push('storefront/checkout')
  }

  const items = useSelector(state => state.cart.cartItems)
  const subtotal  = useSelector(state => state.cart.subtotal)
  const itemCount = useSelector(state => state.cart.itemCount)

  const cartItems = items.map(item => <CartProduct cartItem={item} key={item.id} />);

  let classes = ['float-cart'];

  if (!!isOpen) {
    classes.push('float-cart--open');
  }

    return (
      <div className={classes.join(' ')}>
        {/* If cart open, show close (x) button */}
        {isOpen && (
          <div onClick={closeFloatCart} className="float-cart__close-btn">
            X
          </div>
        )}

        {/* If cart is closed, show bag with quantity of product and open cart action */}
        {!isOpen && (
          <span onClick={openFloatCart} className="bag bag--float-cart-closed">
            <span className="bag__quantity">{itemCount}</span>
          </span>
        )}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{itemCount}</span>
            </span>
            <span className="header-title">Cart</span>
          </div>

          <div className="float-cart__shelf-container">
            {cartItems}
            {!cartItems.length && (
              <p className="shelf-empty">
                Add some products in the cart <br />
              </p>
            )}
          </div>

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`$ ${subtotal}`}
              </p>
            </div>
            <div onClick={handleRerouteToCheckout} className="buy-btn">
              Checkout
            </div>
          </div>
        </div>
      </div>
    );

}

export default FloatCart
