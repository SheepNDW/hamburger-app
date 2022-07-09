import React, { useContext } from 'react';
import classes from './Counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/cartContext';

const Counter = (props) => {
  const ctx = useContext(CartContext);

  const addToCart = () => {
    ctx.addItem(props.meal);
  };

  const subFromCart = () => {
    ctx.removeItem(props.meal);
  };

  return (
    <div className={classes.counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button className={classes.sub} onClick={subFromCart}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.count}>{props.meal.amount}</span>
        </>
      ) : null}
      <button className={classes.add} onClick={addToCart}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
