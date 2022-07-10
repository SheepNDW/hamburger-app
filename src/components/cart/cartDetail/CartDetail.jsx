import React, { useContext } from 'react';
import Backdrop from '../../UI/backdrop/Backdrop';
import Meal from '../../meals/meal/Meal';
import classes from './CartDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import CartContext from '../../../store/cartContext';

const CartDetail = () => {
  const ctx = useContext(CartContext);

  return (
    <Backdrop>
      <div className={classes.cartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.header}>
          <h2 className={classes.title}>餐點明細</h2>
          <div className={classes.clear}>
            <FontAwesomeIcon icon={faTrashAlt} />
            <span>清空購物車</span>
          </div>
        </header>

        <div className={classes.mealList}>
          {ctx.items.map((item) => {
            return <Meal noDesc key={item.id} meal={item} />;
          })}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetail;
