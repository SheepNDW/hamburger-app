import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import iconImg from '../../assets/bag.png';

import CartContext from '../../store/cartContext';
import CartDetail from './cartDetail/CartDetail';
import Checkout from './checkout/Checkout';

const Cart = () => {
  const ctx = useContext(CartContext);

  const [showDetails, setShowDetails] = useState(false);

  const [showCheckout, setShowCheckout] = useState(false);

  const toggleDetails = () => {
    if (ctx.totalAmount === 0) return setShowDetails(false);
    setShowDetails(!showDetails);
  };

  const handleShowCheckout = () => {
    if (ctx.totalAmount === 0) return;
    setShowCheckout(true);
  };

  const handleHideCheckout = () => {
    setShowCheckout(false);
  };

  return (
    <div className={classes.cart} onClick={toggleDetails}>
      {showCheckout && <Checkout onHide={handleHideCheckout} />}

      {/* 購物車詳情 */}
      {showDetails && <CartDetail closeDetail={toggleDetails} />}

      <div className={classes.cart__icon}>
        <img src={iconImg} alt="cart icon" />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.cart__totalAmount}>{ctx.totalAmount}</span>
        )}
      </div>

      {ctx.totalAmount === 0 ? (
        <p className={classes.cart__noMeal}>您還未選購任何餐點</p>
      ) : (
        <p className={classes.cart__price}>{ctx.totalPrice}</p>
      )}

      <button
        onClick={handleShowCheckout}
        className={`${classes.cart__button} ${
          ctx.totalAmount === 0 ? classes.disabled : ''
        }`}
      >
        去結帳
      </button>
    </div>
  );
};

export default Cart;
