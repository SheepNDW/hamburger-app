import React, { useContext } from 'react';
import classes from './Cart.module.css';
import iconImg from '../../assets/bag.png';

import CartContext from '../../store/cartContext';

const Cart = () => {
  const ctx = useContext(CartContext);

  return (
    <div className={classes.cart}>
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
