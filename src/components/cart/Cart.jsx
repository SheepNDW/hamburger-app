import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import iconImg from '../../assets/bag.png';

import CartContext from '../../store/cartContext';
import CartDetail from './cartDetail/CartDetail';

const Cart = () => {
  const ctx = useContext(CartContext);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    if (ctx.totalAmount === 0 && showDetails === false) return;
    setShowDetails(!showDetails);
  };

  return (
    <div className={classes.cart} onClick={toggleDetails}>
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
