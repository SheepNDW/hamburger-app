import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './Checkout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cartContext';
import CheckoutItem from './checkoutItem/CheckoutItem';

const checkRoot = document.getElementById('checkout-root');

const Checkout = (props) => {
  const ctx = useContext(CartContext);

  return ReactDOM.createPortal(
    <div className={classes.checkout}>
      <div className={classes.close}>
        <FontAwesomeIcon icon={faXmark} onClick={props.onHide} />
      </div>

      <div className={classes.checkoutBox}>
        <header className={classes.header}>
          <h2>餐點明細</h2>
        </header>
        <div className={classes.mealList}>
          {ctx.items.map((item) => (
            <CheckoutItem key={item.id} meal={item} />
          ))}
        </div>
        <footer className={classes.footer}>
          <p className={classes.totalPrice}>{ctx.totalPrice}</p>
        </footer>
      </div>
    </div>,
    checkRoot
  );
};

export default Checkout;
