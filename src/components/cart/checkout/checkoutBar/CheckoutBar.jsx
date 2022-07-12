import React from 'react';
import classes from './Checkout.module.css';

const CheckoutBar = (props) => {
  return (
    <div className={classes.checkoutBar}>
      <div className={classes.checkoutBar__totalPrice}>{props.totalPrice}</div>
      <button className={classes.checkoutBar__button}>付款去</button>
    </div>
  );
};

export default CheckoutBar;
